import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { NotFoundPage } from "./NotFoundPage";
import { mockNewsData as mockNews } from "../mock/mockNews";
import { Loading } from "../components/common/Loading";

export const NewsDetailPage = () => {
    const { slug = "" } = useParams();

    const newsItem = mockNews.find((item) => item.slug === slug);

    if (!newsItem) return <NotFoundPage />;

    const { title, subheader, bodytext, images } = newsItem;
    const image = images?.[0]?.url || null;

    return (
        <section className="min-h-screen bg-white py-24 px-4 text-gray-800">
            <div className="max-w-6xl mx-auto">
                {image && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="mb-12 overflow-hidden rounded-3xl shadow-xl"
                    >
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-72 sm:h-96 object-cover"
                            loading="lazy"
                        />
                    </motion.div>
                )}

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-tight"
                >
                    {title}
                </motion.h1>

                {subheader && (
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-gray-500 mb-10"
                    >
                        {subheader}
                    </motion.p>
                )}

                {bodytext && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="prose prose-lg max-w-none text-gray-800"
                        dangerouslySetInnerHTML={{ __html: bodytext }}
                    />
                )}
            </div>
        </section>
    );
};
