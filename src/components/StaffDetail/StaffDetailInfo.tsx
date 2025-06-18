import { type StaffType } from "../../types/staffType";
import { StaffDetailHeaderInfo } from "./StaffDetailHeaderInfo";
import { StaffDetailContacts } from "./StaffDetailContacts";
import { StaffDetailEducation } from "./StaffDetailEducation";
import { StaffDetailExperience } from "./StaffDetailExperience";
import { StaffDetailDisciplines } from "./StaffDetailDisciplines";
import { StaffDetailBio } from "./StaffDetailBio";
// import { StaffDetailPublications } from "./StaffDetailPublications";

export const StaffDetailInfo = ({ teacher }: { teacher: StaffType }) => (
    <div className="z-10 flex flex-col gap-8 text-indigo-900">
        <StaffDetailHeaderInfo
            fullName={teacher.fullName}
            position={teacher.position}
            degree={teacher.degree}
        />

        <StaffDetailContacts
            phone={teacher.phone}
            office={teacher.office}
            email={teacher.email}
        />

        <StaffDetailEducation
            education={teacher.education}
            qualification={teacher.qualification}
        />

        <StaffDetailExperience
            experienceTotal={teacher.experienceTotal}
            experienceSpec={teacher.experienceSpec}
        />

        <StaffDetailDisciplines disciplines={teacher.disciplines} />

        <StaffDetailBio bio={teacher.bio} />

        {/* <StaffDetailPublications publications={teacher.publications} /> */}
    </div>
);
