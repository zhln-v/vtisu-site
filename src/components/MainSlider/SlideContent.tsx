import { motion } from "framer-motion";
import { AnimatedLinkButton } from "../UI/Button/AnimatedLinkButton";
import { FiArrowRight } from "react-icons/fi";

const contentVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut",
            delayChildren: 0.3,
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

interface SlideContentProps {
    title: string;
    subtitle: string;
    link: string;
}

export const SlideContent = ({ title, subtitle, link }: SlideContentProps) => (
    <motion.div
        variants={contentVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4"
    >
        <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4"
        >
            {title}
        </motion.h1>
        <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-2xl mb-6"
        >
            {subtitle}
        </motion.p>
        <motion.div variants={itemVariants}>
            <AnimatedLinkButton
                to={link}
                label={"Узнать больше"}
                variant="outline"
                icon={<FiArrowRight size={18} />}
                color="#ffa"
            />
        </motion.div>
    </motion.div>
);
