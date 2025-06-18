import { motion } from "framer-motion";
import { StaffCardImage } from "./StaffCardImage";
import { StaffCardContent } from "./StaffCardContent";
import type { StaffItem } from "../../types/paginationResponse";

export const StaffCard = (t: StaffItem) => {
    return (
        <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative flex flex-col h-full bg-gradient-to-br from-indigo-50 via-white to-indigo-100 rounded-xl border border-indigo-200 shadow-xl overflow-hidden max-w-md w-full mx-auto"
        >
            <div className="w-full h-64 overflow-hidden">
                <StaffCardImage fullName={t.title} photo={t.images} />
            </div>

            <div className="flex flex-col flex-1">
                <StaffCardContent
                    fullName={t.title}
                    position={t.position}
                    degree={t.degree}
                    slug={t.slug}
                />
            </div>
        </motion.article>
    );
};
