import { Counter } from "../../../components/UI/Counter/Counter";
import { motion } from "framer-motion";

interface CounterItem {
    to: number;
    label: string;
}

interface CountersBlockProps {
    items: CounterItem[];
    bgColor?: string;
}

export const CountersBlock = ({ items, bgColor = "" }: CountersBlockProps) => {
    return (
        <section className={` px-4 ${bgColor}`}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`max-w-6xl mx-auto grid gap-10 text-center ${
                    items.length <= 2
                        ? "grid-cols-1 sm:grid-cols-2"
                        : items.length === 3
                        ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
                        : "grid-cols-1 sm:grid-cols-2 md:grid-cols-4"
                }`}
            >
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="p-8 bg-white/90 backdrop-blur-md rounded-3xl shadow-md transition-all duration-300"
                    >
                        <Counter to={item.to} label={item.label} />
                    </div>
                ))}
            </motion.div>
        </section>
    );
};
