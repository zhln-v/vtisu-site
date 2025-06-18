import { FaBrain, FaMicroscope, FaUsers, FaAward } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "../components/UI/Button/Button";
import { ValueCard } from "../components/AboutBlock/ValueCard";
import { Counter } from "../components/UI/Counter/Counter";
import heroImg from "../assets/slide1.jpg";

export const AboutPage = () => {
    const values = [
        {
            icon: <FaBrain />,
            title: "Инновации",
            text: "Лаборатории ИИ, робототехники и цифровых систем открыты для студентов 24/7.",
        },
        {
            icon: <FaMicroscope />,
            title: "Научные исследования",
            text: "20+ грантов и международных проектов ежегодно.",
        },
        {
            icon: <FaUsers />,
            title: "Сообщество",
            text: "650 студентов и 60 преподавателей-практиков из IT-индустрии.",
        },
        {
            icon: <FaAward />,
            title: "Результат",
            text: "90% выпускников устраиваются в ведущие ИТ-компании РФ и Европы.",
        },
    ];

    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 400], [0, 200]);

    return (
        <section className="min-h-screen font-sans bg-white text-gray-800">
            {/* HERO */}
            <div className="relative h-[70vh] overflow-hidden">
                <motion.img
                    src={heroImg}
                    alt="О кафедре"
                    style={{ y }}
                    className="absolute inset-0 w-full h-full object-cover scale-105 will-change-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent z-10" />
                <motion.div
                    className="relative z-20 flex flex-col items-center justify-center h-full text-white px-6 text-center"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-4xl sm:text-5xl font-extrabold drop-shadow-lg">
                        Кафедра вычислительных технологий и систем управления
                    </h1>
                    <p className="mt-4 max-w-2xl sm:text-lg text-white/90 drop-shadow">
                        Мы объединяем фундаментальное образование, науку и
                        индустрию, чтобы формировать лидеров цифровой
                        трансформации.
                    </p>
                </motion.div>
            </div>

            {/* Миссия */}
            <div className="bg-gradient-to-b from-sky-50 via-white to-indigo-50 py-24 px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.h2
                        className="text-4xl font-bold mb-6 text-indigo-800"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Наша миссия
                    </motion.h2>
                    <motion.p
                        className="text-lg text-gray-700 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Мы воспитываем инженеров, способных разрабатывать
                        интеллектуальные системы будущего. Учим анализировать,
                        программировать и создавать технологии, которые меняют
                        мир.
                    </motion.p>
                </div>
            </div>

            {/* Ценности */}
            <div className="py-24 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        className="text-4xl font-bold text-center text-gray-900 mb-14"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Что нас отличает
                    </motion.h2>
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {values.map((v, i) => (
                            <ValueCard key={i} index={i} {...v} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Счётчики */}
            <div className="py-20 px-4 bg-gradient-to-r from-gray-50 via-white to-gray-50">
                <div className="max-w-4xl mx-auto grid gap-8 sm:grid-cols-3 text-center">
                    <Counter to={650} label="Студентов" />
                    <Counter to={60} label="Преподавателей" />
                    <Counter to={20} label="Грантов в год" />
                </div>
            </div>

            {/* CTA */}
            <div className="relative py-24 bg-gradient-to-br from-sky-500 via-blue-700 to-indigo-900 text-white overflow-hidden">
                <motion.div
                    className="absolute -inset-4 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-300/20 to-transparent blur-2xl"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 6, repeat: Infinity }}
                />
                <div className="relative z-10 text-center max-w-4xl mx-auto">
                    <motion.h3
                        className="text-3xl sm:text-4xl font-semibold mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Присоединяйтесь к будущему технологий
                    </motion.h3>
                    <Button
                        variant="light"
                        asLink
                        to="/education/program/bachelor"
                    >
                        Посмотреть программы
                    </Button>
                </div>
            </div>
        </section>
    );
};
