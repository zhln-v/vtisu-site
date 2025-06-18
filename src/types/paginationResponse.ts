export interface Pagination {
    currentPage: number;
    perPage: number;
    totalItems: number;
    totalPages: number;
}

export interface Image {
    url: string;
    alt: string;
    title: string;
    mime_type: string;
    filesize: number;
}

export interface StaffItem {
    slug: string;
    photo: string;
    title: string;
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

    images?: any;

    email?: string;
}

export interface StaffPaginationResponse {
    pagination: Pagination;
    items: StaffItem[];
}

export interface PageMetaResponse {
    meta: {
        title: string;
        subtitle: string;
    };
}

export interface StaffListPageResponse {
    meta: {
        title: string;
        subtitle: string;
    };
    pagination: Pagination;
    items: StaffItem[];
}
