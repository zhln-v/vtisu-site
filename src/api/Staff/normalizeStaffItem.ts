import type { StaffItem } from "../../types/paginationResponse";

export const normalizeStaffItem = (item: any): StaffItem => ({
    slug: item.slug,
    fullName: item.title,
    photo: item.images?.[0]?.url ?? "",
    position: item.position,
    disciplines: item.courses
        ? item.courses.split(/\r?\n/).filter(Boolean)
        : [],
    degree: item.degree,
    rank: item.rank,
    education: item.education,
    qualification: item.qualification,
    experienceTotal: item.experience_total,
    experienceSpec: item.experience_spec,
    bio: item.bodytext,
    publications:
        typeof item.publications === "string"
            ? item.publications.split(/\r?\n/).map((line: string) => ({
                  title: line,
                  url: "#",
              }))
            : item.publications,
    phone: item.phone,
    office: item.room,
    email: item.email,
});
