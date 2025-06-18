import { AnimatedLinkButton } from "../../../components/UI/Button/AnimatedLinkButton";
import { FiArrowRight } from "react-icons/fi";
import type { InlineElement } from "../../../_defaultType/pageType";
import { renderInline } from "./utils/renderInline";
import { motion } from "framer-motion";

interface InfoBlockProps {
    title: string;
    description: InlineElement[];
    image: {
        src: string;
        alt?: string;
    };
    button?: {
        text: string;
        href: string;
    };
    imagePosition?: "left" | "right";
}

export const InfoBlock = ({
    title,
    description,
    image,
    button,
    imagePosition = "right",
}: InfoBlockProps) => {
    const isImageLeft = imagePosition === "left";

    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-white via-indigo-50 to-purple-100 px-4 py-20">
            <div className="max-w-6xl mx-auto">
                <div
                    className={`flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16 ${
                        isImageLeft ? "md:flex-row-reverse" : ""
                    }`}
                >
                    {/* Изображение */}
                    <motion.div
                        initial={{ opacity: 0, x: isImageLeft ? 80 : -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2"
                    >
                        <img
                            src={image.src}
                            alt={image.alt || ""}
                            className="rounded-3xl shadow-xl w-full object-cover ring-2 ring-white/40"
                        />
                    </motion.div>

                    {/* Текст */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.7,
                            delay: 0.1,
                            ease: "easeOut",
                        }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2 backdrop-blur-lg bg-white/80 rounded-3xl p-10 shadow-2xl"
                    >
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
                            {title}
                        </h2>
                        <div className="text-lg text-gray-700 leading-relaxed space-y-4 mb-6">
                            {description.map((el, i) => (
                                <p key={i}>{renderInline(el, i)}</p>
                            ))}
                        </div>

                        {button && (
                            <AnimatedLinkButton
                                to={button.href}
                                label={button.text}
                                icon={<FiArrowRight />}
                                variant="primary"
                            />
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
