import type { ReactNode } from "react";
import { FiArrowRight } from "react-icons/fi";
import { AnimatedLinkButton } from "../UI/Button/AnimatedLinkButton";

interface Props {
    id: number;
    title: string;
    degree: string;
    duration: string;
    description: string;
    icon: ReactNode;
    link: string;
}

export const ProgramCard = ({
    title,
    degree,
    duration,
    description,
    icon,
    link,
}: Props) => {
    return (
        <div className="group block rounded-3xl p-[1.5px] bg-gradient-to-br from-sky-200/40 via-indigo-200/40 to-purple-200/40 hover:from-sky-300/60 hover:to-purple-300/60 transition-all shadow-md hover:shadow-lg">
            <div className="rounded-3xl bg-white/90 backdrop-blur-sm p-8 h-full flex flex-col justify-between text-center transition-all duration-300">
                {/* Верхняя часть */}
                <div>
                    {/* Иконка */}
                    <div className="mb-5 flex justify-center">
                        <div className="w-14 h-14 rounded-xl bg-sky-100 text-sky-600 text-2xl flex items-center justify-center shadow-inner transition-transform duration-300 group-hover:scale-105">
                            {icon}
                        </div>
                    </div>

                    {/* Заголовок и степень */}
                    <h3 className="text-xl font-semibold text-gray-800 mb-1 transition-all duration-300 group-hover:scale-[1.03] group-hover:tracking-wide group-hover:-translate-y-0.5">
                        {title}
                    </h3>
                    <p className="text-sm text-sky-700">{degree}</p>
                    <p className="text-sm text-gray-500 mb-4">{duration}</p>

                    {/* Описание */}
                    <p className="text-sm text-gray-700 leading-relaxed line-clamp-4">
                        {description}
                    </p>
                </div>

                {/* Кнопка-ссылка */}
                <div className="mt-6 text-right">
                    <AnimatedLinkButton
                        to={link}
                        variant="ghost"
                        label="Ознакомиться"
                        icon={<FiArrowRight size={16} />}
                        color="#155dfc"
                        iconPosition="right"
                        className="px-4 py-1 text-sm"
                    />
                </div>
            </div>
        </div>
    );
};
