export const StaffDetailEducation = ({
    education,
    qualification,
}: {
    education?: string;
    qualification?: string;
}) =>
    (education || qualification) && (
        <div className="space-y-4">
            {/* Заголовок */}
            <h3 className="text-lg font-bold text-indigo-900 tracking-tight">
                Образование и повышение квалификации
            </h3>

            {/* Список */}
            <ul className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-3">
                {education && (
                    <li className="px-4 py-1.5 rounded-lg bg-indigo-50 text-indigo-800 text-sm font-medium border border-indigo-200">
                        {education}
                    </li>
                )}
                {qualification && (
                    <li className="px-4 py-1.5 rounded-lg bg-indigo-50 text-indigo-800 text-sm font-medium border border-indigo-200">
                        {qualification}
                    </li>
                )}
            </ul>
        </div>
    );
