import { motion, AnimatePresence } from "framer-motion";

interface AboutSliderProps {
    image: string;
}

export const AboutSlider = ({ image }: AboutSliderProps) => (
    <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
        className="w-full md:w-1/2 flex items-stretch"
    >
        <div className="relative w-full rounded-2xl shadow-md overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.img
                    key={image}
                    src={image}
                    alt="Слайд"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />
            </AnimatePresence>
        </div>
    </motion.div>
);
