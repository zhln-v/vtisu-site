import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { StaffCard } from "../components/StaffCard/StaffCard";
import { AnimatedText } from "../components/UI/AnimatedText/AnimatedText";
// import { NotFoundPage } from "./NotFoundPage";
// import { Loading } from "../components/common/Loading";
import { mockStaffData as mockStaff } from "../mock/mockTeachers";

export const StaffsPage = () => {
    const { "*": slug = "" } = useParams();

    // Моки вместо API
    const staffCards = useMemo(() => {
        return mockStaff.map((t) => <StaffCard key={t.slug} {...t} />);
    }, []);

    return (
        <section className="min-h-screen bg-gray-50 py-24 px-4">
            <div className="max-w-6xl mx-auto text-center mb-16">
                <h1 className="flex justify-center">
                    <AnimatedText
                        text="Преподаватели кафедры"
                        textClass="text-4xl sm:text-5xl font-extrabold text-gray-900"
                        effect="fade"
                    />
                </h1>
                <p className="flex justify-center">
                    <AnimatedText
                        text="Познакомьтесь с нашими специалистами"
                        textClass="text-gray-600 mt-4"
                        effect="fade"
                    />
                </p>
            </div>

            <div className="max-w-5xl mx-auto grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                {staffCards}
            </div>
        </section>
    );
};
