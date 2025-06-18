import { HiOutlineBookOpen } from "react-icons/hi";

interface Publication {
    title: string;
    url: string;
}

export const StaffDetailPublications = ({
    publications,
}: {
    publications?: Publication[];
}) =>
    publications && publications.length > 0 ? (
        <div>
            <h3 className="text-md font-semibold text-indigo-700 mb-1">
                📖 Публикации
            </h3>
            <ul className="space-y-1 text-sm">
                {publications.map((p) => (
                    <li key={p.url}>
                        <a
                            href={p.url}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 text-blue-600 hover:underline"
                        >
                            <HiOutlineBookOpen />
                            {p.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    ) : null;
