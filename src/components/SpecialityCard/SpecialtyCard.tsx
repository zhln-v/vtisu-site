import { motion } from "framer-motion";
import { AnimatedLinkButton } from "../UI/Button/AnimatedLinkButton";
import type { Specialty } from "./SpecialtyType";
import { FiArrowRight } from "react-icons/fi";

export const SpecialtyCard = ({
    code,
    name,
    summary,
    duration,
    profile,
    index,
}: Specialty & { index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.05 }}
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-3xl border border-blue-100 bg-white/90 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300"
        >
            <div className="p-6 h-full flex flex-col justify-between">
                {/* Верхняя часть */}
                <div>
                    <p className="text-sm font-semibold text-blue-600 tracking-wide mb-1">
                        {code}
                    </p>
                    <h3 className="text-xl font-semibold text-gray-800 leading-snug">
                        {name}
                    </h3>

                    {profile && (
                        <p className="text-sm text-gray-500 mt-1 italic">
                            {profile}
                        </p>
                    )}

                    <p className="text-sm text-gray-700 mt-4 leading-relaxed line-clamp-4">
                        {summary}
                    </p>
                </div>

                {/* Нижняя часть */}
                <div className="mt-6 flex items-center justify-between flex-wrap gap-4">
                    <p className="text-sm text-gray-500">
                        <span className="font-medium text-gray-800">
                            {duration}
                        </span>{" "}
                        обучения
                    </p>

                    <AnimatedLinkButton
                        to={`/specialties/${code}`}
                        label="Подробнее"
                        icon={<FiArrowRight size={18} />}
                        variant="ghost"
                        color="#1d4ed8"
                        className="px-3 py-1 text-sm font-medium w-full"
                    />
                </div>
            </div>
        </motion.div>
    );
};
