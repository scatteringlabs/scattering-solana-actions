export const BASE_URL_DEV = "https://api.scattering.io/dev-api/v2";
export const getCollectionBySlug = async ({ slug, }) => {
    const response = await fetch(`${BASE_URL_DEV}/collection/slug/${slug}`);
    console.log('response', response);
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    return response.json();
};
