import { useMemo } from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { mockNewsData } from "../mock/mockNews";
import { NewsCard } from "../components/NewsBlock/NewsCard";

export const NewsPage = () => {
    const { "*": slug = "" } = useParams();

    const newsItems = useMemo(() => mockNewsData, []);

    return (
        <section className="py-24 px-4 bg-white min-h-[calc(100vh-64px)] text-gray-800">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 drop-shadow-sm"
                    >
                        Новости кафедры
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-gray-600 max-w-2xl mx-auto"
                    >
                        Актуальные события, достижения, проекты и анонсы —
                        следите за жизнью кафедры!
                    </motion.p>
                </div>

                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {newsItems.map((item) => (
                        <div
                            key={item.uid}
                            className="rounded-2xl overflow-hidden shadow-md border border-gray-200 bg-white hover:shadow-lg transition-shadow duration-200"
                        >
                            <NewsCard item={item} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
