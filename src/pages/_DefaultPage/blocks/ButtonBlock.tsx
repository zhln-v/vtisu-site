import { FiArrowRight } from "react-icons/fi";
import { AnimatedLinkButton } from "../../../components/UI/Button/AnimatedLinkButton";
import { motion } from "framer-motion";

interface ButtonBlockProps {
    text: string;
    href: string;
}

export const ButtonBlock = ({ text, href }: ButtonBlockProps) => {
    return (
        <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            <AnimatedLinkButton
                to={href}
                label={text}
                icon={<FiArrowRight />}
                variant="outline"
            />
        </motion.div>
    );
};
