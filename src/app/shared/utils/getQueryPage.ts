export const getQueryPage = (url:string|undefined) => {
    const params = new URLSearchParams(url);
    const page = params.get('_page');
    return Number(page);
};
