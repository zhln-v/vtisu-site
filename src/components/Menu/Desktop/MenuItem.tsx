import { MotionLink } from "../../Header/MotionLink";

interface MenuItemProps {
    item: { title: string; href: string; children?: any[] };
    isActive: boolean;
    isHovered: boolean;
    onMouseEnter: () => void;
    setRef: (el: HTMLLIElement | null) => void;
}

export const MenuItem = ({
    item,
    isActive,
    isHovered,
    onMouseEnter,
    setRef,
}: MenuItemProps) => (
    <li
        ref={setRef}
        className="relative h-full flex items-center px-2"
        onMouseEnter={onMouseEnter}
    >
        <MotionLink
            to={item.href}
            whileTap={{ scale: 0.96 }}
            className={`
        relative px-2 py-2 text-base font-medium tracking-tight
        transition-all duration-300 ease-out
        ${isActive ? "text-blue-600 font-semibold" : "text-gray-800"}
        hover:text-blue-700
      `}
        >
            <span className="relative z-10">{item.title}</span>

            {/* Подчеркивание */}
            <span
                className={`
          absolute bottom-1 left-1/2 transform -translate-x-1/2
          h-[2px] bg-gradient-to-r from-blue-500 to-purple-500
          transition-all duration-300 ease-in-out
          ${isHovered ? "w-full" : "w-0"}
          rounded-full
        `}
            />
        </MotionLink>
    </li>
);
