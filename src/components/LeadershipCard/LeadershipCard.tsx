import { FiMail, FiPhone } from "react-icons/fi";

interface Props {
    fullName: string;
    position: string;
    photo: string;
    email?: string;
    phone?: string;
}

export const LeadershipCard = ({
    fullName,
    position,
    photo,
    email,
    phone,
}: Props) => {
    return (
        <div className="flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 h-full">
            {/* Фото */}
            <img
                src={photo}
                alt={fullName}
                className="w-full h-64 object-cover"
                loading="lazy"
            />

            {/* Контент */}
            <div className="flex flex-col flex-grow p-5 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {fullName}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{position}</p>

                <div className="mt-auto space-y-2">
                    {email && (
                        <p className="flex items-center justify-center gap-2 text-sm text-gray-700">
                            <FiMail className="text-blue-500" />
                            <a
                                href={`mailto:${email}`}
                                className="hover:underline break-all"
                            >
                                {email}
                            </a>
                        </p>
                    )}
                    {phone && (
                        <p className="flex items-center justify-center gap-2 text-sm text-gray-700">
                            <FiPhone className="text-blue-500" />
                            <a
                                href={`tel:${phone}`}
                                className="hover:underline"
                            >
                                {phone}
                            </a>
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};
