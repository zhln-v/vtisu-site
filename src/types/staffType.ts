export interface StaffType {
    slug: string;
    photo: string;
    fullName: string;
    position: string;
    disciplines: string[];

    degree?: string;
    rank?: string;
    education?: string;
    qualification?: string;
    experienceTotal?: string;
    experienceSpec?: string;
    bio?: string;
    publications?: { title: string; url: string }[];
    phone?: string;
    office?: string;

    email?: string;
}
