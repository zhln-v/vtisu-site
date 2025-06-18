import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { NewsCard } from "./NewsCard";
import { mockNews } from "../../data/news";
import { AnimatedLinkButton } from "../UI/Button/AnimatedLinkButton";
import { FiArrowRight } from "react-icons/fi";
import type { NewsItemType } from "../../types/newsItemType";

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.15,
            duration: 0.6,
            ease: "easeOut",
        },
    }),
};

export const NewsPreviewBlock = () => {
    const [news, setNews] = useState<NewsItemType[]>([]);

    // useEffect(() => {
    //     setNews(mockNews);
    // }, []);

    return (
        <section className="py-24 px-4 bg-gray-50">
            {/* <div className="max-w-6xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6"
                >
                    Последние новости
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-base text-gray-600 mb-12 max-w-2xl mx-auto"
                >
                    Следите за событиями, достижениями и яркими моментами жизни
                    кафедры.
                </motion.p>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {news.map((n, i) => (
                        <motion.div
                            key={n.id}
                            custom={i}
                            initial="hidden"
                            whileInView="visible"
                            variants={fadeUp}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <NewsCard {...n} />
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.6,
                        delay: 0.3 + news.length * 0.15,
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="mt-12"
                >
                    <div>
                        <AnimatedLinkButton
                            to="/news"
                            variant="ghost"
                            label={"Все новости"}
                            icon={<FiArrowRight size={20} />}
                            color="#1d4ed8"
                            iconPosition="right"
                            className="px-4 py-1 hover:bg-white/100 hover:shadow-md text-[20px]"
                        />
                    </div>
                </motion.div>
            </div> */}
        </section>
    );
};
