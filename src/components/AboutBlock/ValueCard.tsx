// components/AboutBlock/ValueCard.tsx
import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface Props {
    icon: ReactNode;
    title: string;
    text: string;
    index?: number;
}

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.6,
            ease: "easeOut",
        },
    }),
};

export const ValueCard = ({ icon, title, text, index = 0 }: Props) => (
    <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={index}
        whileHover={{ y: -6, boxShadow: "0 14px 24px rgba(0,0,0,0.15)" }}
        transition={{ type: "spring", stiffness: 200 }}
        className="relative p-6 bg-white border rounded-2xl"
    >
        <div className="text-3xl text-blue-600 mb-3 group-hover:animate-ping-slow">
            {icon}
        </div>
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-2 leading-relaxed">{text}</p>
    </motion.div>
);
