import type { InlineElement } from "../../../_defaultType/pageType";
import { renderInline } from "./utils/renderInline";
import { motion } from "framer-motion";

interface Props {
    items: InlineElement[][];
    ordered?: boolean;
}

export const ListBlock = ({ items, ordered = false }: Props) => {
    const Tag = ordered ? "ol" : "ul";

    return (
        <motion.div
            className="max-w-6xl mx-auto px-4 sm:px-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <Tag
                className={`grid gap-6 text-base leading-relaxed
                    ${ordered ? "list-decimal" : "list-disc"}
                    marker:text-transparent marker:bg-clip-text marker:bg-gradient-to-r marker:from-indigo-500 marker:to-purple-500
                    pl-6 md:pl-6
                    grid-cols-1 md:grid-cols-2`}
            >
                {items.map((item, index) => (
                    <li
                        key={index}
                        className="text-gray-800 flex flex-col items-start md:items-start text-center md:text-left"
                    >
                        {item.map((inline, i) => (
                            <span key={i} className="w-full">
                                {renderInline(inline, i)}
                            </span>
                        ))}
                    </li>
                ))}
            </Tag>
        </motion.div>
    );
};
