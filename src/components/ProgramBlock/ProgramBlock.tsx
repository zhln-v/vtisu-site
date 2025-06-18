import { FaGraduationCap, FaUserGraduate } from "react-icons/fa";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { ProgramCard } from "./ProgramCard";

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.4,
            ease: "easeOut",
        },
    }),
};

interface Program {
    id: number;
    title: string;
    degree: string;
    duration: string;
    description: string;
    icon: ReactNode;
    link: string;
}

export const ProgramsBlock = () => {
    const programs: Program[] = [
        {
            id: 1,
            title: "Бакалавриат",
            degree: "Бакалавр техники и технологий",
            duration: "4 года",
            description:
                "Фундаментальные знания в области вычислительных систем, программирования и цифровых технологий.",
            icon: <FaUserGraduate className="text-3xl text-blue-600" />,
            link: "/education/program/bachelor",
        },
        {
            id: 2,
            title: "Магистратура",
            degree: "Магистр технических наук",
            duration: "2 года",
            description:
                "Углублённая подготовка: исследования, проектирование нейросетей, системная интеграция, наука.",
            icon: <FaGraduationCap className="text-3xl text-green-600" />,
            link: "/education/program/master",
        },
    ];

    return (
        <section className="py-24 px-4 bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-12"
                >
                    Направления подготовки
                </motion.h2>

                <div className="grid gap-10 md:grid-cols-2">
                    {programs.map((p, i) => (
                        <motion.div
                            key={p.id}
                            custom={i}
                            initial="hidden"
                            whileInView="visible"
                            variants={fadeUp}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <ProgramCard {...p} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
