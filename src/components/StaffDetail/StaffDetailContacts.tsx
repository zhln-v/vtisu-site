import { FiPhoneCall, FiSmartphone, FiMail, FiHome } from "react-icons/fi";

export const StaffDetailContacts = ({
    phone,
    office,
    email,
}: {
    phone?: string;
    office?: string;
    email?: string;
}) =>
    (phone || office || email) && (
        <div className="space-y-4">
            {/* Заголовок */}
            <div className="flex items-center gap-2 text-indigo-900">
                <FiPhoneCall className="text-xl text-indigo-500" />
                <h3 className="text-lg sm:text-xl font-bold tracking-tight">
                    Контактная информация
                </h3>
            </div>

            {/* Контактные карточки */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm sm:text-base">
                {phone && (
                    <a
                        href={`tel:${phone}`}
                        className="flex items-center gap-3 bg-white border border-indigo-100 px-4 py-3 rounded-lg shadow hover:shadow-md transition duration-200 text-indigo-800 hover:bg-indigo-50"
                    >
                        <FiSmartphone className="text-indigo-500 text-xl" />
                        <span className="font-medium">{phone}</span>
                    </a>
                )}

                {email && (
                    <a
                        href={`mailto:${email}`}
                        className="flex items-center gap-3 bg-white border border-indigo-100 px-4 py-3 rounded-lg shadow hover:shadow-md transition duration-200 text-indigo-800 hover:bg-indigo-50"
                    >
                        <FiMail className="text-indigo-500 text-xl" />
                        <span className="font-medium">{email}</span>
                    </a>
                )}

                {office && (
                    <div className="flex items-center gap-3 bg-white border border-indigo-100 px-4 py-3 rounded-lg shadow hover:shadow-md transition duration-200 text-indigo-800">
                        <FiHome className="text-indigo-500 text-xl" />
                        <span className="font-medium">{office}</span>
                    </div>
                )}
            </div>
        </div>
    );
