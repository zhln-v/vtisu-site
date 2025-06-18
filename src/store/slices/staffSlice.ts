// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// // import type { StaffType } from "../../types/staffType";
// import type { StaffItem } from "../../types/paginationResponse";

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

// export function mapStaffApi(src: StaffApi): StaffItem {
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

// export const fetchStaff = createAsyncThunk<StaffItem[]>(
//     "staff/fetchStaff",
//     async () => {
//         const res = await fetch("/api/staff/teachers?type=140");
//         const data = await res.json();
//         return (data.items as StaffApi[]).map(mapStaffApi);
//     }
// );

// interface StaffState {
//     items: StaffItem[];
//     loading: boolean;
//     error: string | null;
// }

// const initialState: StaffState = {
//     items: [],
//     loading: false,
//     error: null,
// };

// const staffSlice = createSlice({
//     name: "staff",
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {
//         builder
//             .addCase(fetchStaff.pending, (state) => {
//                 state.loading = true;
//                 state.error = null;
//             })
//             .addCase(fetchStaff.fulfilled, (state, action) => {
//                 state.items = action.payload;
//                 state.loading = false;
//             })
//             .addCase(fetchStaff.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.error.message ?? "Ошибка загрузки";
//             });
//     },
// });

// export default staffSlice.reducer;
