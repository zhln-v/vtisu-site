import React from "react";
import { motion } from "framer-motion";

interface ImageBlockProps {
    src: string;
    alt?: string;
    caption?: string;
    float?: "left" | "right";
}

export const ImageBlock: React.FC<ImageBlockProps> = ({
    src,
    alt,
    caption,
    float,
}) => {
    const floatClass =
        float === "left"
            ? "md:float-left md:mr-6 md:w-1/2"
            : float === "right"
            ? "md:float-right md:ml-6 md:w-1/2"
            : "w-full";

    return (
        <div className="max-w-6xl mx-auto">
            <motion.figure
                className={`my-8 ${floatClass} clear-both`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <img
                    src={src}
                    alt={alt || ""}
                    className="rounded-2xl shadow-lg w-full object-cover"
                />
                {caption && (
                    <figcaption className="text-sm text-gray-500 italic mt-2 text-center">
                        {caption}
                    </figcaption>
                )}
            </motion.figure>
        </div>
    );
};
