export interface Pagination {
    currentPage: number;
    perPage: number;
    totalItems: number;
    totalPages: number;
}

export const getPagination = (data: any): Pagination | null => {
    if (!data?.pagination) return null;
    return {
        currentPage: Number(data.pagination.currentPage) || 1,
        perPage: Number(data.pagination.perPage) || 6,
        totalItems: Number(data.pagination.totalItems) || 0,
        totalPages: Number(data.pagination.totalPages) || 1,
    };
};
