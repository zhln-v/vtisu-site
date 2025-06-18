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
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <Tag
                className={`grid grid-cols-2 gap-4 text-base leading-relaxed ${
                    ordered ? "list-decimal" : "list-disc"
                } marker:text-transparent marker:bg-clip-text marker:bg-gradient-to-r marker:from-indigo-500 marker:to-purple-500 pl-6`}
            >
                {items.map((item, index) => (
                    <li key={index} className="text-gray-800">
                        {item.map((inline, i) => (
                            <span key={i}>{renderInline(inline, i)}</span>
                        ))}
                    </li>
                ))}
            </Tag>
        </motion.div>
    );
};
