import { motion } from "framer-motion";
import { HiArrowLeft } from "react-icons/hi";
import { AnimatedLinkButton } from "../UI/Button/AnimatedLinkButton";

export const StaffDetailHeader = () => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-4 max-w-xs"
    >
        <AnimatedLinkButton
            to="/staff/teachers"
            label="К преподавателям"
            icon={<HiArrowLeft size={18} />}
            color="#155dfc"
            iconPosition="left"
            variant="ghost"
            className="px-4 py-1 hover:bg-white/100 hover:shadow-md w-full"
        />
    </motion.div>
);
