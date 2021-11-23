import {HTTP, HTTPS} from '../constans/api.js';

export const changeHTTP = url => {
    const result = url ? url.replace(HTTP, HTTPS) : url

    return result;
}

export const getApiPeoples = async (url) => {
    try {
        const res = await fetch(url);

        if (!res.ok) {
            console.error('Could not fetch.', res.status);
            return false;
        }

        return await res.json(); 
    } catch (error) {
        console.error('Could not fetch.', error.message);
        return false;
    }
}

