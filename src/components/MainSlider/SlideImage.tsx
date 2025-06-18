import { motion } from "framer-motion";

interface SlideImageProps {
    src: string;
    alt: string;
}

export const SlideImage = ({ src, alt }: SlideImageProps) => (
    <motion.img
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        src={src}
        alt={alt}
        decoding="async"
        loading="eager"
        className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
    />
);
