import { useEffect, type ElementType } from "react";
import { HiX, HiChevronRight } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { AnimatedText } from "../../UI/AnimatedText/AnimatedText";
import type { menuItemType } from "../../../types/menuItemType";

// interface MenuItem {
//     title: string;
//     href: string;
//     children?: MenuItem[];
// }

interface Props {
    isOpen: boolean;
    menuItems: menuItemType[];
    onClose: () => void;
}

const Tag: ElementType = "h4";

export const MobileMenu = ({ isOpen, menuItems, onClose }: Props) => {
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Тень фона */}
                    <motion.div
                        key="backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.4 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 bg-black z-40"
                        onClick={onClose}
                    />

                    {/* Меню */}
                    <motion.div
                        key="mobile-menu"
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "tween", duration: 0.3 }}
                        className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-white z-50 overflow-y-auto p-6"
                    >
                        {/* Заголовок */}
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold text-gray-800">
                                Меню
                            </h2>
                            <button
                                onClick={onClose}
                                className="text-3xl text-gray-500 hover:text-red-500 transition"
                            >
                                <HiX />
                            </button>
                        </div>

                        {/* Пункты меню */}
                        <ul className="space-y-5">
                            {menuItems.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        to={item.href}
                                        onClick={onClose}
                                        className="group flex items-center justify-between text-lg text-gray-800 hover:text-blue-600 font-medium transition"
                                    >
                                        <span>{item.title}</span>
                                        {item.children && (
                                            <HiChevronRight className="text-xl text-blue-400 group-hover:translate-x-1 transition-transform duration-200" />
                                        )}
                                    </Link>

                                    {item.children && (
                                        <motion.ul
                                            initial={{ opacity: 0, y: -4 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -4 }}
                                            transition={{ duration: 0.2 }}
                                            className="mt-2 pl-4 border-l border-gray-200 space-y-2"
                                        >
                                            {item.children.map((sub) => (
                                                <li key={sub.href}>
                                                    <Link
                                                        to={sub.href}
                                                        onClick={onClose}
                                                        className="block text-base text-gray-600 hover:text-blue-600 font-medium transition"
                                                    >
                                                        {sub.title}
                                                    </Link>
                                                </li>
                                            ))}
                                        </motion.ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
