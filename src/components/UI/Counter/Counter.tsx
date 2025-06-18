// components/UI/Counter/Counter.tsx
import { useEffect, useRef } from "react";
import {
    motion,
    useInView,
    useMotionValue,
    useTransform,
    animate,
} from "framer-motion";

interface Props {
    from?: number;
    to: number;
    label: string;
    duration?: number;
}

export const Counter = ({ from = 0, to, label, duration = 1.5 }: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.4 });

    const count = useMotionValue(from);
    const formatted = useTransform(count, (v) =>
        Math.floor(v).toLocaleString("ru-RU")
    );

    useEffect(() => {
        if (isInView) {
            animate(count, to, { duration, ease: "easeOut" });
        }
    }, [isInView, count, to, duration]);

    return (
        <div ref={ref} className="text-center">
            <motion.span
                className="text-5xl font-extrabold text-blue-600 drop-shadow-md"
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                {formatted}
            </motion.span>
            <p className="text-sm text-gray-600">{label}</p>
        </div>
    );
};
