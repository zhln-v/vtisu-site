import { StaffsPage } from "../pages/StaffsPage";
import { StaffDetail } from "../pages/StaffDetail";
import { NewsPage } from "../pages/NewsPage";
import { NewsDetailPage } from "../pages/NewsDetailPage";

// Компоненты по doktype (для списков)
export const doktypeComponentMap: Record<number, React.ComponentType<any>> = {
    103: StaffsPage,
    102: NewsPage,
};

// Компоненты по type (для детальных страниц)
export const typeComponentMap: Record<number, React.ComponentType<any>> = {
    170: StaffDetail,
};
