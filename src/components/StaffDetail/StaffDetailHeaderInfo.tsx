export const StaffDetailHeaderInfo = ({
    fullName,
    position,
    degree,
}: {
    fullName: string;
    position: string;
    degree?: string;
}) => (
    <div className="space-y-4">
        {/* ФИО */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-900 leading-tight">
            {fullName}
        </h1>

        {/* Инфо: должность + степень */}
        <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm sm:text-base text-gray-700">
            <div className="flex items-center gap-1">
                <span className="text-indigo-400 font-semibold">
                    Должность:
                </span>
                <span className="font-medium">{position}</span>
            </div>

            {degree && (
                <div className="flex items-center gap-1">
                    <span className="text-indigo-400 font-semibold">
                        Учёная степень:
                    </span>
                    <span className="font-medium italic">{degree}</span>
                </div>
            )}
        </div>
    </div>
);
