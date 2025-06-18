import { type FC, type ReactNode, useState } from "react";
import { motion } from "framer-motion";
import { MotionLink } from "../../Header/MotionLink";

// Определяет цвет текста в зависимости от яркости фона
function getContrastingTextColor(hex: string): string {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 140 ? "#000000" : "#ffffff";
}

function darkenColor(hex: string, amount = 0.1): string {
    const r = Math.max(0, parseInt(hex.slice(1, 3), 16) * (1 - amount));
    const g = Math.max(0, parseInt(hex.slice(3, 5), 16) * (1 - amount));
    const b = Math.max(0, parseInt(hex.slice(5, 7), 16) * (1 - amount));
    return `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;
}

function hexToRgba(hex: string, alpha = 1): string {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

interface Props {
    to: string;
    label: string | ReactNode;
    icon?: ReactNode;
    variant?: "primary" | "outline" | "ghost";
    iconPosition?: "right" | "left";
    className?: string;
    color?: string;
}

export const AnimatedLinkButton: FC<Props> = ({
    to,
    label,
    icon,
    variant = "ghost",
    iconPosition = "right",
    className = "",
    color,
}) => {
    const [isHovered, setIsHovered] = useState(false);

    const base =
        "group inline-flex items-center justify-between px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300";

    let textColor = "";
    let bgColor = "";
    let hoverBg = "";
    let borderColor = "";

    if (color) {
        if (variant === "primary") {
            bgColor = color;
            textColor = getContrastingTextColor(color);
            hoverBg = darkenColor(color, 0.1);
        } else if (variant === "outline") {
            textColor = color;
            borderColor = color;
            hoverBg = hexToRgba(color, 0.05);
        } else {
            textColor = color;
            hoverBg = hexToRgba(color, 0.08);
        }
    }

    const variantClasses = {
        primary: color ? "" : "bg-blue-600 text-white hover:bg-blue-700",
        outline: color
            ? "border"
            : "border border-gray-300 text-gray-800 hover:border-opacity-80",
        ghost: color ? "" : "text-white hover:bg-white/10",
    };

    const animatedIcon = icon ? (
        <motion.span
            animate={
                isHovered
                    ? {
                          x: iconPosition === "right" ? 6 : -6,
                          rotate: iconPosition === "right" ? 45 : -45,
                      }
                    : { x: 0, rotate: 0 }
            }
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="w-5 h-5 flex items-center justify-center"
            style={
                variant === "primary" && color
                    ? { color: textColor }
                    : undefined
            }
        >
            {icon}
        </motion.span>
    ) : null;

    return (
        <MotionLink
            to={to}
            className={`${base} ${variantClasses[variant]} ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                backgroundColor: isHovered ? hoverBg || bgColor : bgColor,
                color: textColor || undefined,
                borderColor: borderColor || undefined,
            }}
        >
            {iconPosition === "left" && animatedIcon && (
                <span className="mr-2">{animatedIcon}</span>
            )}
            {label}
            {iconPosition === "right" && animatedIcon && (
                <span className="ml-2">{animatedIcon}</span>
            )}
        </MotionLink>
    );
};
