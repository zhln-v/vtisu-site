import { FiArrowRight } from "react-icons/fi";
import { AnimatedLinkButton } from "../UI/Button/AnimatedLinkButton";

interface Props {
    fullName: string;
    position: string;
    degree?: string;
    slug?: string;
}

export const StaffCardContent = ({
    fullName,
    position,
    degree,
    slug,
}: Props) => {
    return (
        <div className="p-5 w-full h-full flex flex-col justify-between text-indigo-900">
            {/* Верхняя часть */}
            <div className="space-y-2">
                <h3 className="text-2xl font-extrabold text-center">
                    {fullName}
                </h3>
                <p className="text-sm text-blue-600 font-semibold text-left">
                    Должность: {position}
                </p>
                {degree && (
                    <p className="text-sm text-gray-500 text-left">
                        Учёная степень: {degree}
                    </p>
                )}
            </div>

            {/* Кнопка */}
            <div className="pt-4">
                {slug ? (
                    <AnimatedLinkButton
                        to={slug}
                        label="Перейти к профилю"
                        icon={<FiArrowRight size={18} />}
                        color="#155dfc"
                        iconPosition="right"
                        variant="ghost"
                        className="px-4 py-1 hover:bg-white/100 hover:shadow-md w-full"
                    />
                ) : (
                    <div className="text-sm text-gray-400 italic text-center">
                        Профиль недоступен
                    </div>
                )}
            </div>
        </div>
    );
};
