import React from "react";
import { motion, type Variants } from "framer-motion";

interface AnimatedLetterProps {
    char: string;
    index: number;
    variants: Variants;
    textClass?: string;
}

export const AnimatedLetter: React.FC<AnimatedLetterProps> = ({
    char,
    index,
    variants,
    textClass = "text-gray-300 text-lg md:text-xl leading-relaxed",
}) => {
    return (
        <motion.span
            className={`inline-block ${textClass}`}
            custom={index}
            variants={variants}
        >
            {char}
        </motion.span>
    );
};
