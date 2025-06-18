import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { findMenuItemBySlug } from "../utils/findMenuItemBySlug";
import { type RootState } from "../store";
import { doktypeComponentMap } from "../types/componentMap";
import { NotFoundPage } from "./NotFoundPage";

// Импортируй напрямую нужные компоненты
import { NewsDetailPage } from "./NewsDetailPage";
import { StaffDetail } from "./StaffDetail";

export const Page = () => {
    const { "*": slug = "" } = useParams();
    const menuItems = useSelector((state: RootState) => state.menu.items);
    const menuItem = findMenuItemBySlug(slug, menuItems);

    const slugParts = slug.split("/").filter(Boolean);
    const baseSection = findBaseSection(slugParts);
    const isDetail = isDetailPage(slugParts, menuItem);

    let Component;

    if (isDetail) {
        if (baseSection === "news") Component = NewsDetailPage;
        else if (baseSection === "staff") Component = StaffDetail;
    } else {
        const doktype = menuItem?.doktype ?? detectListDoktype(baseSection);
        Component = doktypeComponentMap[doktype!];
    }

    return Component ? <Component slug={slug} /> : <NotFoundPage />;
};

function findBaseSection(slugParts: string[]): string | undefined {
    const knownSections = ["staff", "news"];
    return slugParts.find((part) => knownSections.includes(part));
}

function isDetailPage(slugParts: string[], menuItem: any): boolean {
    return slugParts.length >= 2 && !menuItem;
}

function detectListDoktype(baseSection?: string): number | undefined {
    switch (baseSection) {
        case "staff":
            return 103;
        case "news":
            return 102;
        default:
            return undefined;
    }
}
