import { API_URL } from "../utils/constants";

export const apiConnect = async( url, endpoint ) => {
    try{
        const customUrl = url ? url : `${API_URL}/${endpoint}?limit=20&offset=0`;
        const response = await fetch(customUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
};
