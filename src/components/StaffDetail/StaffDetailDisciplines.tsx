import { FiBookOpen } from "react-icons/fi";

export const StaffDetailDisciplines = ({
    disciplines,
}: {
    disciplines?: string[];
}) =>
    disciplines && disciplines.length > 0 ? (
        <div className="space-y-4">
            {/* Заголовок с иконкой */}
            <div className="flex items-center gap-2 text-indigo-900">
                <FiBookOpen className="text-xl text-indigo-500" />
                <h3 className="text-lg sm:text-xl font-bold tracking-tight">
                    Преподаваемые дисциплины
                </h3>
            </div>

            {/* Список дисциплин */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3">
                {disciplines.map((d) => (
                    <li
                        key={d}
                        className="bg-white border border-indigo-100 px-4 py-2 rounded-lg text-indigo-800 font-medium shadow hover:shadow-md transition duration-200"
                    >
                        {d}
                    </li>
                ))}
            </ul>
        </div>
    ) : null;
