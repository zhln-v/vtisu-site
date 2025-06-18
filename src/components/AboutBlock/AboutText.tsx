import { motion } from "framer-motion";
import { AnimatedLinkButton } from "../UI/Button/AnimatedLinkButton";
import { FiArrowRight } from "react-icons/fi";

export const AboutText = () => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
        className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg w-full md:w-1/2 flex flex-col"
    >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            О кафедре
        </h2>
        <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
            Кафедра вычислительных технологий и систем управления — центр
            подготовки инженеров будущего. Мы объединяем науку и ИТ, чтобы
            создавать лидеров цифровой эпохи.
        </p>
        <div className="mt-auto mr-auto">
            <AnimatedLinkButton
                to="/home/about"
                variant="ghost"
                label="Подробнее"
                icon={<FiArrowRight size={18} />}
                color="#155dfc"
                iconPosition="right"
                className="px-4 py-1 hover:bg-white/100 hover:shadow-md"
            />
        </div>
    </motion.div>
);
