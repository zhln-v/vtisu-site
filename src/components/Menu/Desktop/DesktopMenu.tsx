import { useEffect, useState, type FC } from "react";
import { MenuItem } from "./MenuItem";
import type { menuItemType } from "../../../types/menuItemType";

interface Props {
    menuItems: menuItemType[];
    hoveredIdx: number | null;
    setHoveredIdx: (value: number | null) => void;
    setRef: any;
}

export const DesktopMenu: FC<Props> = ({
    menuItems,
    hoveredIdx,
    setHoveredIdx,
    setRef,
}) => {
    const [activePath, setActivePath] = useState("/");

    useEffect(() => {
        setActivePath(window.location.pathname);
    }, []);

    const isCurrent = (idx: number): boolean => {
        const item = menuItems[idx];
        return (
            activePath === item.href ||
            item.children?.some((c) => c.href === activePath) ||
            false
        );
    };

    return (
        <ul className="flex h-full gap-4 px-6 items-stretch">
            {menuItems.map((item, idx) => (
                <MenuItem
                    key={item.href}
                    item={item}
                    isActive={isCurrent(idx)}
                    isHovered={hoveredIdx === idx}
                    onMouseEnter={() =>
                        setHoveredIdx(item.children ? idx : null)
                    }
                    setRef={setRef(idx)}
                />
            ))}
        </ul>
    );
};
