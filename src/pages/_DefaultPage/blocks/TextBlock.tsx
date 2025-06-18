import React from "react";
import { motion } from "framer-motion";

type InlineElement =
    | { type: "text"; text: string }
    | { type: "bold"; content: InlineElement[] }
    | { type: "italic"; content: InlineElement[] }
    | { type: "link"; text: string; href: string }
    | { type: "image"; src: string; alt?: string };

interface TextBlockProps {
    rich: InlineElement[];
}

export const TextBlock: React.FC<TextBlockProps> = ({ rich }) => {
    return (
        <div className="max-w-6xl mx-auto">
            <motion.p
                className="text-lg leading-7 text-gray-800"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                {rich.map((el, i) => renderInline(el, i))}
            </motion.p>
        </div>
    );
};

// Вспомогательная функция для рендеринга inline элементов
const renderInline = (el: InlineElement, key: number): React.ReactNode => {
    switch (el.type) {
        case "text":
            return <span key={key}>{el.text}</span>;
        case "bold":
            return (
                <strong key={key} className="font-semibold">
                    {el.content.map((c, i) => renderInline(c, i))}
                </strong>
            );
        case "italic":
            return (
                <em key={key} className="italic">
                    {el.content.map((c, i) => renderInline(c, i))}
                </em>
            );
        case "link":
            return (
                <motion.a
                    key={key}
                    href={el.href}
                    className="text-blue-600 underline underline-offset-2 hover:text-blue-800 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    {el.text}
                </motion.a>
            );
        case "image":
            return (
                <motion.img
                    key={key}
                    src={el.src}
                    alt={el.alt || ""}
                    className="inline-block h-5 mx-1 align-text-bottom"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                />
            );
        default:
            return null;
    }
};
