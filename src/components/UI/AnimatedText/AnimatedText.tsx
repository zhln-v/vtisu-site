import React, { type ElementType } from "react";
import { motion, type Variants } from "framer-motion";
import clsx from "clsx";
import { AnimatedLetter } from "./AnimatedLetter";
import { variantPresets } from "./variants";
import type { AnimatedTextProps } from "./types";

export const AnimatedText: React.FC<AnimatedTextProps> = ({
    text,
    as: Component = "span",
    textClass = "text-gray-300 text-lg md:text-xl leading-relaxed",
    stagger = 0.03,
    springConfig = { stiffness: 500, damping: 25 },
    effect = "spring",
}) => {
    const words = text.split(" ");

    const MotionTag = motion.create(Component as ElementType);

    let letterVariants: Variants;
    switch (effect) {
        case "fade":
            letterVariants = variantPresets.getFadeVariants(stagger);
            break;
        case "zoom":
            letterVariants = variantPresets.getZoomVariants(stagger);
            break;
        case "spring":
        default:
            letterVariants = variantPresets.getSpringVariants(
                stagger,
                springConfig
            );
            break;
    }

    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: stagger,
            },
        },
    };

    let letterIndex = 0;

    return (
        <MotionTag
            key={text}
            className={clsx("flex flex-wrap")}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {words.map((word, wordIndex) => (
                <span
                    key={`word-${wordIndex}`}
                    className="whitespace-nowrap mr-1 last:mr-0"
                >
                    {word.split("").map((char) => (
                        <AnimatedLetter
                            key={letterIndex}
                            char={char}
                            index={letterIndex++}
                            variants={letterVariants}
                            textClass={textClass}
                        />
                    ))}
                </span>
            ))}
        </MotionTag>
    );
};
