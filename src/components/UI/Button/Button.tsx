import { Link } from "react-router-dom";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import classNames from "classnames";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: "primary" | "secondary" | "outline" | "light" | "dark";
    asLink?: boolean;
    to?: string;
}

export const Button = ({
    children,
    variant = "primary",
    asLink = false,
    to = "#",
    className,
    ...props
}: ButtonProps) => {
    const baseClasses =
        "inline-flex items-center justify-center font-semibold rounded-lg px-5 py-2 text-sm focus:outline-none";

    const variants = {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
        outline: "border border-gray-300 text-gray-800 hover:bg-gray-100",
        light: "bg-white text-gray-900 hover:bg-gray-100",
        dark: "bg-gray-800 text-white hover:bg-gray-700",
    };

    const classes = classNames(baseClasses, variants[variant], className);

    if (asLink) {
        return (
            <Link to={to || "#"} className={classes}>
                {children}
            </Link>
        );
    }

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
};
