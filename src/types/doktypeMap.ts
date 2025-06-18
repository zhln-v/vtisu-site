import { StaffsPage } from "../pages/StaffsPage";
import { NewsPage } from "../pages/NewsPage";
import { ProgramPage } from "../pages/ProgramPage";
import type { FC } from "react";

export const doktypeComponentMap: Record<number, FC> = {
    102: NewsPage,
    103: StaffsPage,
    105: ProgramPage,
};
