import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { AnimatedLinkButton } from "../../UI/Button/AnimatedLinkButton";
import { AnimatedText } from "../../UI/AnimatedText/AnimatedText";

interface SubMenuItemProps {
    title: string;
    href: string;
}

export const SubMenuItem = ({ title, href }: SubMenuItemProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25 }}
        >
            <AnimatedLinkButton
                to={href}
                label={
                    <AnimatedText
                        text={title}
                        textClass="text-sm font-medium text-gray-800 group-hover:text-blue-600 transition-colors duration-300"
                        effect="fade"
                    />
                }
                icon={<FiArrowRight size={18} />}
                color="#155dfc"
                iconPosition="right"
                variant="ghost"
                className="px-4 py-1 hover:bg-white/100 hover:shadow-md w-full"
            />
        </motion.div>
    );
};
