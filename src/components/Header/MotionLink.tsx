import { motion } from "framer-motion";
import { forwardRef } from "react";
import { Link } from "react-router-dom";

const CustomLink = forwardRef<
    HTMLAnchorElement,
    React.ComponentProps<typeof Link>
>((props, ref) => <Link ref={ref} {...props} />);

export const MotionLink = motion.create(CustomLink);
