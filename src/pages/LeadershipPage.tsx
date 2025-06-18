import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LeadershipCard } from "../components/LeadershipCard/LeadershipCard";

interface Leader {
    id: number;
    fullName: string;
    position: string;
    photo: string;
    phone?: string;
    email?: string;
}

export const LeadershipPage = () => {
    const [leaders, setLeaders] = useState<Leader[]>([]);

    useEffect(() => {
        // Заглушка — потом заменишь на API или Headless CMS
        setLeaders([
            {
                id: 1,
                fullName: "Иванов Сергей Петрович",
                position: "Заведующий кафедрой",
                photo: "/images/leadership/head.jpg",
                phone: "+7 (900) 123-45-67",
                email: "ivanov@vlsu.ru",
            },
            {
                id: 2,
                fullName: "Петрова Елена Николаевна",
                position: "Заместитель заведующего",
                photo: "/images/leadership/deputy.jpg",
                email: "petrova@vlsu.ru",
            },
            {
                id: 3,
                fullName: "Сидоров Алексей Павлович",
                position: "Секретарь кафедры",
                photo: "/images/leadership/secretary.jpg",
                phone: "+7 (900) 765-43-21",
                email: "sidorov@vlsu.ru",
            },
        ]);
    }, []);

    return (
        <section className="relative py-24 px-6 bg-gradient-to-b from-white via-sky-50 to-gray-100">
            <div className="max-w-6xl mx-auto">
                {/* Заголовок */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-16"
                >
                    Руководство кафедры
                </motion.h1>

                {/* Сетка карточек */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {leaders.map((leader, i) => (
                        <motion.div
                            key={leader.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.4 }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="h-full"
                        >
                            <LeadershipCard {...leader} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
