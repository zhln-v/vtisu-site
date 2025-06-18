import { useEffect, useState } from "react";

export function useApiData<T>(url: string) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        if (!url) return;

        setLoading(true);
        setError(null);

        fetch(url)
            .then(async (res) => {
                if (!res.ok) throw new Error(`Ошибка: ${res.status}`);
                const json = await res.json();
                setData(json);
            })
            .catch((err) => setError(err))
            .finally(() => setLoading(false));
    }, [url]);

    return { data, loading, error };
}
