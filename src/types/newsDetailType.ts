export interface NewsDetailType {
    id: number;
    slug: string;
    meta: {
        title: string;
        subtitle: string;
        abstract: string;
        description: string;
    };
    media: {
        url: string;
        alt?: string;
    }[];
    content: {
        colPos0: {
            id: number;
            type: string;
            content: {
                bodytext?: string;
                header?: string;
            };
        }[];
    };
}
