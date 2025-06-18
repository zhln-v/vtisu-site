import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Options {
    slug?: string;
    autoFetch?: boolean;
    extraQueryParams?: Record<string, string | number>;
    type?: number;
    doktype?: number;
}

export function usePageData<T = any>(options: Options = {}) {
    const { "*": routeSlug = "" } = useParams();
    const slug = options.slug ?? routeSlug;
    const autoFetch = options.autoFetch !== false;

    const [state, setState] = useState<{
        data: T | null;
        loading: boolean;
        error: boolean;
    }>({
        data: null,
        loading: autoFetch,
        error: false,
    });

    useEffect(() => {
        if (!autoFetch || !slug) return;

        setState({ data: null, loading: true, error: false });

        const query = new URLSearchParams();

        if (options.type) {
            query.append("type", String(options.type));
        }

        if (options.doktype) {
            query.append("doktype", String(options.doktype));
        }

        if (options.extraQueryParams) {
            for (const [key, value] of Object.entries(
                options.extraQueryParams
            )) {
                query.append(key, String(value));
            }
        }

        const url = `/api/${slug}${query.toString() ? `?${query}` : ""}`;

        fetch(url)
            .then((res) => {
                if (!res.ok) throw new Error("Ошибка загрузки");
                return res.json();
            })
            .then((json: T) => {
                setState({ data: json, loading: false, error: false });
            })
            .catch((e) => {
                console.error("[usePageData] Ошибка загрузки:", e);
                setState({ data: null, loading: false, error: true });
            });
    }, [
        slug,
        autoFetch,
        options.type,
        options.doktype,
        options.extraQueryParams,
    ]);

    return {
        slug,
        data: state.data,
        loading: state.loading,
        error: state.error,
    };
}
