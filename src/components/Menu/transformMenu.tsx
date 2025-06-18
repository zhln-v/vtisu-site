import type { menuItemType } from "../../types/menuItemType";

type RawMenuEntry = {
    title: string;
    link: string;
    hasSubpages: number;
    abstract?: string;
};

type RawBlock = {
    type: string;
    content: {
        header: string;
        menu: RawMenuEntry[];
    };
};

export type RawApiResponse = {
    content: {
        colPos0: RawBlock[];
    };
};

// Внешние ссылки → явно указываем родителя (тоже без /api/)
const externalLinkParents: Record<string, string> = {
    "https://iite.vlsu.ru": "/home",
    "https://www.vlsu.ru/": "/home",
};

export function transformMenu(apiData: RawApiResponse): menuItemType[] {
    const blocks = apiData?.content?.colPos0 ?? [];
    const flatItems: Record<string, menuItemType> = {};

    for (const block of blocks) {
        if (!block.content?.menu?.length) continue;

        for (const item of block.content.menu) {
            const normalizedKey = normalizePath(item.link);
            flatItems[normalizedKey] = {
                title: item.title,
                href: removeApiPrefix(item.link),
                doktype: item.abstract
                    ? parseInt(item.abstract) || undefined
                    : undefined,
                children: [],
            };
        }
    }

    const tree: menuItemType[] = [];

    for (const item of Object.values(flatItems)) {
        const originalHref = item.href;
        const normalizedHref = normalizePath(originalHref);

        const externalParent = externalLinkParents[originalHref];
        const parentHref = externalParent || getParentPath(normalizedHref);

        if (parentHref && flatItems[parentHref]) {
            flatItems[parentHref].children!.push(item);
        } else {
            tree.push(item);
        }
    }

    return tree;
}

// Удаляет /api из начала
function removeApiPrefix(path: string): string {
    return path.replace(/^\/api/, "") || "/";
}

// Приводим к нормальному пути (без /api, без конечного /)
function normalizePath(url: string): string {
    if (url.startsWith("http")) return url; // внешний URL оставляем
    return removeApiPrefix(url).replace(/\/+$/, "") || "/";
}

// Родительский путь без /api
function getParentPath(path: string): string | null {
    if (path.startsWith("http")) return null;
    const segments = path.split("/").filter(Boolean);
    if (segments.length <= 1) return null;
    return "/" + segments.slice(0, -1).join("/");
}
