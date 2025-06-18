import type { Variants } from "framer-motion";

export interface SpringConfig {
    stiffness: number;
    damping: number;
}

/**
 * Генерирует Variants для эффекта «spring»
 * @param stagger Задержка между буквами (в секундах)
 * @param springConfig Параметры пружины
 */
export const getSpringVariants = (
    stagger: number,
    springConfig: SpringConfig
): Variants => ({
    hidden: (_: number) => ({
        opacity: 0,
        y: -30,
        scale: 1.3,
        rotate: (Math.random() - 0.5) * 20, // случайный угол ±10°
    }),
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        rotate: 0,
        transition: {
            type: "spring",
            stiffness: springConfig.stiffness,
            damping: springConfig.damping,
            delay: i * stagger,
        },
    }),
});
