import React from "react";
import type { InlineElement } from "../../../../_defaultType/pageType";
import { AnimatedLinkButton } from "../../../../components/UI/Button/AnimatedLinkButton";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";

export const renderInline = (
    el: InlineElement,
    key: number
): React.ReactNode => {
    switch (el.type) {
        case "text":
            return (
                <motion.span
                    key={key}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: key * 0.05 }}
                    viewport={{ once: true }}
                >
                    {el.text}
                </motion.span>
            );

        case "bold":
            return (
                <strong key={key} className="font-semibold text-gray-900">
                    {el.content.map((c, i) => renderInline(c, i))}
                </strong>
            );

        case "italic":
            return (
                <em key={key} className="italic text-gray-700">
                    {el.content.map((c, i) => renderInline(c, i))}
                </em>
            );

        case "link":
            return (
                <div
                    key={key}
                    className="w-full flex justify-center md:justify-start mt-4"
                >
                    <AnimatedLinkButton
                        to={el.href}
                        label={el.text}
                        icon={<FiArrowRight size={16} />}
                        variant="outline"
                        className="w-full max-w-xs"
                    />
                </div>
            );

        case "image":
            return (
                <motion.img
                    key={key}
                    src={el.src}
                    alt={el.alt || ""}
                    className="inline-block h-5 mx-1 align-text-bottom"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    viewport={{ once: true }}
                />
            );

        default:
            return null;
    }
};
