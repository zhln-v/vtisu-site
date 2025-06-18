type ApiQueryParams = {
    type?: number; // typeNum, например 140
    doktype?: number; // тип подстраниц
    parentPid?: number; // UID родителя
    page?: number;
    perPage?: number;
    [key: string]: string | number | undefined;
};

export function buildApiUrl(base: string, params: ApiQueryParams = {}): string {
    const query = new URLSearchParams();

    if (params.type !== undefined) query.set("type", params.type.toString());
    if (params.doktype !== undefined)
        query.set("doktype", params.doktype.toString());
    if (params.parentPid !== undefined)
        query.set("parentPid", params.parentPid.toString());
    if (params.page !== undefined) query.set("page", params.page.toString());
    if (params.perPage !== undefined)
        query.set("perPage", params.perPage.toString());

    for (const key in params) {
        if (
            !["type", "doktype", "parentPid", "page", "perPage"].includes(
                key
            ) &&
            params[key] !== undefined
        ) {
            query.set(key, String(params[key]));
        }
    }

    return `${base}?${query.toString()}`;
}
