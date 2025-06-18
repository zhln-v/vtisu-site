// Header.tsx
// import { useSelector } from "react-redux";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { Logo } from "./Logo";
import { useMenuRefs } from "../../hooks/useMenuRefs";
import { SubMenu } from "../Menu/Desktop/SubMenu";
import { MobileMenu } from "../Menu/Mobile/MobileMenu";
import { DesktopMenu } from "../Menu/Desktop/DesktopMenu";
// import { type RootState } from "../../store";
import { mockMenu } from "../../mock/mockMenu";

export const Header = () => {
    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const { refs, setRef } = useMenuRefs<HTMLLIElement>();
    // const menuItems = useSelector((state: RootState) => state.menu.items);

    const hoveredItem = hoveredIdx !== null ? mockMenu[hoveredIdx] : null;
    const submenuItems = hoveredItem?.children ?? [];

    const rect =
        hoveredIdx !== null
            ? refs.current[hoveredIdx]?.getBoundingClientRect()
            : null;

    return (
        <header
            className="fixed top-0 left-0 w-full z-50 bg-white/100"
            onMouseLeave={() => setHoveredIdx(null)}
        >
            <div className="relative">
                <div className="max-w-screen-xl mx-auto h-16 flex items-center justify-between px-6 sm:px-6 lg:px-8">
                    <Logo />
                    <nav className="hidden lg:block h-full">
                        <DesktopMenu
                            menuItems={mockMenu}
                            hoveredIdx={hoveredIdx}
                            setHoveredIdx={setHoveredIdx}
                            setRef={setRef}
                        />
                    </nav>
                    <button
                        className="block lg:hidden text-3xl text-gray-700 hover:text-blue-600 transition"
                        onClick={() => setIsMobileOpen(true)}
                        aria-label="Открыть меню"
                    >
                        <HiMenu />
                    </button>
                </div>
            </div>
            <SubMenu
                items={submenuItems}
                label={hoveredItem?.title || "Меню"}
                visible={!!submenuItems.length && !!rect}
            />
            <MobileMenu
                isOpen={isMobileOpen}
                menuItems={mockMenu}
                onClose={() => setIsMobileOpen(false)}
            />
        </header>
    );
};
