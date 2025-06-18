import type { Variants } from 'framer-motion';

/**
 * Генерирует Variants для эффекта «fade»
 * @param stagger Задержка между буквами (в секундах)
 */
export const getFadeVariants = (stagger: number): Variants => ({
    hidden: { opacity: 0 },
    visible: (i: number) => ({
        opacity: 1,
        transition: { delay: i * stagger, duration: 0.4 },
    }),
});
