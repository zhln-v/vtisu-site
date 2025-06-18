export interface NewsItemType {
    uid: number;
    title: string;
    subheader: string;
    bodytext: string;
    slug: string;
    images?: {
        url: string;
        alt: string;
        title: string;
        mime_type: string;
        filesize: number;
    }[];
}
