import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { SpecialtyCard } from "../components/SpecialityCard/SpecialtyCard";

const programs = {
    bachelor: {
        title: "Бакалавриат",
        duration: "4 года",
        degree: "Бакалавр техники и технологий",
        description:
            "Фундаментальные знания в ИТ, программировании и автоматизации, сочетание теории и практики.",
        specialties: [
            {
                code: "09.03.01",
                name: "Информатика и вычислительная техника",
                profile: "Программное обеспечение и системы управления",
                summary:
                    "Изучение архитектуры ЭВМ, ОС, ПО и систем управления.",
                duration: "4 года",
            },
            {
                code: "09.03.03",
                name: "Прикладная информатика",
                profile: "Информационные технологии и бизнес-аналитика",
                summary:
                    "Подготовка в области цифровых бизнес-процессов и ИТ-консалтинга.",
                duration: "4 года",
            },
            {
                code: "27.03.04",
                name: "Управление в технических системах",
                profile: "Автоматизированные системы управления",
                summary: "Проектирование и эксплуатация АСУ ТП, робототехника.",
                duration: "4 года",
            },
        ],
    },
    master: {
        title: "Магистратура",
        duration: "2 года",
        degree: "Магистр технических наук",
        description:
            "Углублённая подготовка в области искусственного интеллекта, киберфизических систем и научных исследований.",
        specialties: [
            {
                code: "09.04.01",
                name: "Информатика и вычислительная техника",
                profile: "Интеллектуальные системы управления",
                summary:
                    "Исследование нейросетей, алгоритмы адаптивного управления.",
                duration: "2 года",
            },
            {
                code: "09.04.03",
                name: "Прикладная информатика",
                profile: "Программная инженерия и цифровая трансформация",
                summary:
                    "Разработка сложных ИС, DevOps-процессы, цифровые сервисы.",
                duration: "2 года",
            },
            {
                code: "27.04.04",
                name: "Управление в технических системах",
                profile:
                    "Управление интеллектуальными робототехническими системами",
                summary:
                    "Синтез и анализ систем управления мобильной робототехникой.",
                duration: "2 года",
            },
        ],
    },
} as const;

export const ProgramPage = () => {
    const { level } = useParams();
    const navigate = useNavigate();
    const program = programs[level as keyof typeof programs];

    useEffect(() => {
        if (!program) {
            navigate("/404", { replace: true });
        }
    }, [program, navigate]);

    if (!program) return null;

    return (
        <section className="py-24 px-4 bg-gradient-to-b from-white via-gray-50 to-gray-100 min-h-[calc(100vh-64px)] text-black">
            <div className="max-w-5xl mx-auto text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900"
                >
                    {program.title}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-lg text-gray-700"
                >
                    {program.degree}
                </motion.p>

                <p className="text-sm text-gray-500 mb-8">{program.duration}</p>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-base text-gray-700 leading-relaxed max-w-2xl mx-auto"
                >
                    {program.description}
                </motion.p>

                {program.specialties?.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="mt-20"
                    >
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-10">
                            Направления подготовки
                        </h2>
                        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {program.specialties.map((spec, i) => (
                                <SpecialtyCard key={i} index={i} {...spec} />
                            ))}
                        </div>
                    </motion.div>
                )}
            </div>
        </section>
    );
};
