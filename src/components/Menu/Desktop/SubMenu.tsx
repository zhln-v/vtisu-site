import { useRef, useLayoutEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SubMenuItem } from "./SubMenuItem";
import { AnimatedText } from "../../UI/AnimatedText/AnimatedText";

interface SubMenuProps {
    items: { title: string; href: string }[];
    visible: boolean;
    label: string;
}

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.06,
            delayChildren: 0.08,
        },
    },
    exit: {
        transition: {
            staggerChildren: 0.04,
            staggerDirection: -1,
        },
    },
};

export const SubMenu = ({ items, visible, label }: SubMenuProps) => {
    const ref = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (!visible || !ref.current) return;
    }, [visible, items]);

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ opacity: 0, x: 0 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute top-full left-0 w-screen z-50 bg-white/80 backdrop-blur-md shadow-xl"
                >
                    <div
                        ref={ref}
                        className="mx-auto max-w-screen-xl px-6 py-8 sm:px-8 lg:px-12"
                    >
                        <div className="mb-8 text-2xl font-bold tracking-tight">
                            <AnimatedText
                                text={label}
                                textClass="text-gray-900"
                                effect="fade"
                            />
                        </div>

                        <motion.div
                            key={label}
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
                        >
                            {items.map((item) => (
                                <SubMenuItem
                                    key={item.href}
                                    title={item.title}
                                    href={item.href}
                                />
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
