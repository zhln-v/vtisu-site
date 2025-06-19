import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export const NotFoundPage = () => {
    const navigate = useNavigate();
    const [secondsLeft, setSecondsLeft] = useState(5);

    useEffect(() => {
        const timer = setInterval(() => {
            setSecondsLeft((s) => s - 1);
        }, 1000);

        const redirect = setTimeout(() => {
            if (window.history.length > 2) {
                window.history.back();
            } else {
                navigate("/");
            }
        }, 5000);

        return () => {
            clearInterval(timer);
            clearTimeout(redirect);
        };
    }, [navigate]);

    return (
        <section className="min-h-screen flex flex-col justify-center items-center bg-white px-4">
            <motion.h1
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-6xl font-extrabold text-blue-600"
            >
                404
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-4 text-lg text-gray-700 text-center max-w-md"
            >
                Упс! Страница не найдена.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-6 text-sm text-gray-500"
            >
                Перенаправление через{" "}
                <motion.span
                    key={secondsLeft}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="inline-block font-semibold text-blue-600"
                >
                    {secondsLeft}
                </motion.span>{" "}
                секунд...
            </motion.div>
        </section>
    );
};
