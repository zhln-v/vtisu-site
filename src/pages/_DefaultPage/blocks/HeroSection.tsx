import { motion, useScroll, useTransform } from "framer-motion";

interface Props {
    image: string;
    title: string;
    subtitle?: string;
}

export const HeroSection = ({ image, title, subtitle }: Props) => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 300], [0, 100]);

    return (
        <div className="relative h-[70vh] overflow-hidden">
            <motion.img
                src={image}
                alt={title}
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
                    {title}
                </h1>
                {subtitle && (
                    <p className="mt-4 max-w-2xl sm:text-lg text-white/90 drop-shadow">
                        {subtitle}
                    </p>
                )}
            </motion.div>
        </div>
    );
};
