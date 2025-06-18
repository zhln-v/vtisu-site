import React from "react";
import { motion } from "framer-motion";

interface HeadingBlockProps {
    level: number;
    text: string;
}

export const HeadingBlock: React.FC<HeadingBlockProps> = ({ level, text }) => {
    const commonClasses =
        "text-gray-800 font-extrabold leading-tight tracking-tight";

    const animationProps = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
        viewport: { once: true },
    };

    const HeadingTag = () => {
        switch (level) {
            case 1:
                return (
                    <motion.h1
                        {...animationProps}
                        className={`text-5xl sm:text-6xl ${commonClasses} mb-10`}
                    >
                        {text}
                    </motion.h1>
                );
            case 2:
                return (
                    <motion.h2
                        {...animationProps}
                        className={`text-4xl sm:text-5xl ${commonClasses} mb-8`}
                    >
                        {text}
                    </motion.h2>
                );
            case 3:
                return (
                    <motion.h3
                        {...animationProps}
                        className={`text-3xl sm:text-4xl ${commonClasses} mb-6`}
                    >
                        {text}
                    </motion.h3>
                );
            case 4:
                return (
                    <motion.h4
                        {...animationProps}
                        className={`text-2xl sm:text-3xl ${commonClasses} mb-4`}
                    >
                        {text}
                    </motion.h4>
                );
            default:
                return (
                    <motion.h5
                        {...animationProps}
                        className={`text-xl sm:text-2xl ${commonClasses} mb-3`}
                    >
                        {text}
                    </motion.h5>
                );
        }
    };

    return <div className="max-w-6xl mx-auto px-4">{HeadingTag()}</div>;
};
