// import type { StaffType } from "../types/staffType";

// export interface StaffApi {
//     slug: string;
//     title: string;
//     position: string;
//     degree: string | null;
//     experience_total: string | null;
//     experience_spec: string | null;
//     courses: string | null;
//     email: string | null;
//     phone: string | null;
//     room: string | null;
//     bodytext: string | null;
//     publications: string | null;
//     images?: {
//         url: string;
//         alt: string;
//         title: string;
//         mime_type: string;
//         filesize: number;
//     }[];
// }

// export function mapStaffApi(src: StaffApi): StaffType {
//     const parsePublications = (str?: string | null) =>
//         str
//             ? str
//                   .split(/\r?\n/)
//                   .map((line) => line.trim())
//                   .filter(Boolean)
//                   .map((p) => {
//                       const [title, url] = p.split("|");
//                       return {
//                           title: title?.trim() ?? "",
//                           url: url?.trim() ?? "",
//                       };
//                   })
//             : [];

//     return {
//         slug: src.slug.replace(/^\/+/, ""),
//         photo:
//             src.images?.[0]?.url ??
//             "https://placehold.co/400x400?text=Нет+фото",
//         fullName: src.title,
//         position: src.position,
//         disciplines: src.courses
//             ? src.courses.split(/\r?\n/).filter(Boolean)
//             : [],

//         degree: src.degree ?? undefined,
//         education: src.bodytext ?? undefined,
//         experienceTotal: src.experience_total ?? undefined,
//         experienceSpec: src.experience_spec ?? undefined,
//         bio: src.bodytext ?? undefined,
//         publications: parsePublications(src.publications),
//         phone: src.phone ?? undefined,
//         office: src.room ?? undefined,
//     };
// }
