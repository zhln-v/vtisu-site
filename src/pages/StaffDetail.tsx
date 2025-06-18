import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { StaffDetailHeader } from "../components/StaffDetail/StaffDetailHeader";
import { StaffDetailPhoto } from "../components/StaffDetail/StaffDetailPhoto";
import { StaffDetailInfo } from "../components/StaffDetail/StaffDetailInfo";
import { NotFoundPage } from "./NotFoundPage";
import { mockStaffData as mockStaff } from "../mock/mockTeachers";
import type { StaffType } from "../types/staffType";

export const StaffDetail = () => {
    const { "*": slug = "" } = useParams();

    const rawStaff = mockStaff.find((t) => t.slug === slug);

    if (!rawStaff) {
        return <NotFoundPage />;
    }

    // Преобразуем объект StaffItem в StaffType
    const teacher: StaffType = {
        ...rawStaff,
        fullName: rawStaff.title, // 👈 преобразуем title → fullName
    };

    return (
        <section className="min-h-screen py-20 px-4 bg-gradient-to-tr from-indigo-100 via-white to-sky-100">
            <div className="max-w-6xl mx-auto">
                <StaffDetailHeader />

                <motion.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="relative grid lg:grid-cols-2 gap-12"
                >
                    <StaffDetailPhoto
                        src={teacher.photo}
                        alt={teacher.fullName}
                    />
                    <StaffDetailInfo teacher={teacher} />
                </motion.div>
            </div>
        </section>
    );
};
