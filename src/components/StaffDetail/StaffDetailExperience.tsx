import { FiBriefcase } from "react-icons/fi";

export const StaffDetailExperience = ({
    experienceTotal,
    experienceSpec,
}: {
    experienceTotal?: string;
    experienceSpec?: string;
}) =>
    (experienceTotal || experienceSpec) && (
        <div className="space-y-4">
            {/* Заголовок с иконкой */}
            <div className="flex items-center gap-2 text-indigo-900">
                <FiBriefcase className="text-xl text-indigo-500" />
                <h3 className="text-lg sm:text-xl font-bold tracking-tight">
                    Опыт работы
                </h3>
            </div>

            {/* Стажи — в виде описаний */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 text-sm sm:text-base">
                {experienceTotal && (
                    <div className="border-l-4 border-indigo-200 bg-indigo-50 px-4 py-2 rounded-sm text-indigo-900">
                        <span className="text-indigo-500 font-semibold">
                            Общий стаж:{" "}
                        </span>
                        {experienceTotal}
                    </div>
                )}
                {experienceSpec && (
                    <div className="border-l-4 border-indigo-200 bg-indigo-50 px-4 py-2 rounded-sm text-indigo-900">
                        <span className="text-indigo-500 font-semibold">
                            По специальности:{" "}
                        </span>
                        {experienceSpec}
                    </div>
                )}
            </div>
        </div>
    );
