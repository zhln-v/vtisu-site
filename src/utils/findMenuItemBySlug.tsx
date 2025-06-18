import type { menuItemType } from "../types/menuItemType";

/**
 * Поиск элемента меню по slug внутри дерева.
 *
 * @param slug - ЧПУ путь, например: "staff/teachers"
 * @param menuItems - дерево меню из Redux
 * @returns Найденный пункт меню или null
 */
export function findMenuItemBySlug(
    slug: string,
    menuItems: menuItemType[]
): menuItemType | null {
    const normalized = "/" + slug.replace(/^\/+|\/+$/g, "");

    const search = (items: menuItemType[]): menuItemType | null => {
        for (const item of items) {
            if (item.href === normalized) return item;
            if (item.children?.length) {
                const found = search(item.children);
                if (found) return found;
            }
        }
        return null;
    };

    return search(menuItems);
}
