import { motion } from "framer-motion";

interface SlideProgressBarProps {
    activeSlideIndex: number;
}

export const SlideProgressBar = ({
    activeSlideIndex,
}: SlideProgressBarProps) => (
    <motion.div
        key={activeSlideIndex} // ← это важно для перезапуска анимации!
        className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-blue-500 to-purple-600"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 8, ease: "linear" }}
        style={{ transformOrigin: "left" }}
    />
);
