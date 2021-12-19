import { API_URL } from "../utils/constants";

export const apiConnect = async( url, endpoint, query ) => {
    try{
        const customUrl = url ? url : `${API_URL}/${endpoint}${query ? `${query}` : ''}`;
        const response = await fetch(customUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
};
