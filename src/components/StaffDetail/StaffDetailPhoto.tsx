import { useState } from "react";

export const StaffDetailPhoto = ({
    src,
    alt,
}: {
    src: string;
    alt: string;
}) => {
    const baseUrl = import.meta.env.VITE_API_URL;
    const initialSrc = src?.startsWith("http") ? src : `${baseUrl}${src}`;
    const [imageSrc, setImageSrc] = useState(initialSrc);

    const fallback = "https://cdn-icons-png.flaticon.com/512/4054/4054617.png"; // ✅ путь к заглушке

    return (
        <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-200 via-white to-purple-100 rounded-3xl blur-2xl opacity-30" />
            <img
                src={imageSrc}
                alt={alt}
                onError={() => setImageSrc(fallback)}
                className="relative z-10 w-full h-auto rounded-2xl object-cover shadow-xl"
            />
        </div>
    );
};
