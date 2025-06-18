import { FiArrowRight } from "react-icons/fi";

export const Loading = () => {
    return (
        <div className="flex items-center justify-center min-h-[300px]">
            <div className="flex flex-col items-center gap-6">
                {/* Плавно двигающаяся стрелка */}
                <div className="relative w-12 h-12">
                    <FiArrowRight
                        size={48}
                        className="text-blue-500 animate-bounce-right"
                    />
                </div>

                {/* Текст */}
                <p className="text-gray-600 text-lg font-semibold animate-pulse">
                    Загрузка данных...
                </p>
            </div>
        </div>
    );
};
