import type { Variants } from "framer-motion";

/**
 * Генерирует Variants для эффекта «zoom»
 * @param stagger Задержка между буквами (в секундах)
 */
export const getZoomVariants = (stagger: number): Variants => ({
    hidden: { opacity: 0, scale: 1.5 },
    visible: (i: number) => ({
        opacity: 1,
        scale: 1,
        transition: { delay: i * stagger, duration: 0.5, ease: "easeOut" },
    }),
});
