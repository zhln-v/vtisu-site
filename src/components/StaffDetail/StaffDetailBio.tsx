import { FiUser } from "react-icons/fi";

export const StaffDetailBio = ({ bio }: { bio?: string }) =>
    bio ? (
        <div className="space-y-4">
            {/* Заголовок с иконкой */}
            <div className="flex items-center gap-2 text-indigo-900">
                <FiUser className="text-xl text-indigo-500" />
                <h3 className="text-lg sm:text-xl font-bold tracking-tight">
                    Биография
                </h3>
            </div>

            {/* Текст без подложки */}
            <p className="text-sm sm:text-base text-gray-800 leading-relaxed whitespace-pre-wrap">
                {bio}
            </p>
        </div>
    ) : null;
