interface Props {
    fullName: string;
    photo?: { url: string }[] | null;
}

const API_URL = import.meta.env.VITE_API_URL;

export const StaffCardImage = ({ fullName, photo }: Props) => {
    const firstPhotoUrl = photo?.[0]?.url;

    const initials = fullName
        ?.split(" ")
        .filter(Boolean)
        .map((n) => n[0]?.toUpperCase())
        .join("")
        .slice(0, 3);

    const imageUrl = firstPhotoUrl?.startsWith("http")
        ? firstPhotoUrl
        : firstPhotoUrl
        ? `${API_URL}${firstPhotoUrl}`
        : null;

    return imageUrl ? (
        <img
            src={imageUrl}
            alt={fullName}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
    ) : (
        <div className="w-full h-full flex items-center justify-center bg-indigo-100 text-indigo-500 text-5xl font-bold">
            {initials || "??"}
        </div>
    );
};
