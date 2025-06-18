import { aboutPage } from "../_defaultType/mockAbout";
import { historyPage } from "../_defaultType/mockDepartmentHistory";
import { microelectronicsDesignCenterPage } from "../_defaultType/mockDesignCenter";
import type { PageData } from "../_defaultType/pageType";

export const mockPages: PageData[] = [
    aboutPage,
    historyPage,
    microelectronicsDesignCenterPage,
];

export const findPageBySlug = (slug: string): PageData | undefined => {
    const cleanSlug = slug.replace(/^\/+|\/+$/g, ""); // убирает начальный/конечный /
    console.log(cleanSlug);
    return mockPages.find((page) => page.slug === cleanSlug);
};
