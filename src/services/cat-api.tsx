import axios from "axios";

export interface ICat {
    url: string;
    id: string;
}

const GetRandomCat = async (): Promise<ICat[]> => {
    const apiUrl = 'https://api.thecatapi.com/v1/images/search/';

    try {
        const response = await axios.get(apiUrl);
        return response.data;
    } catch (error) {
        console.error('Error getting cat data:', error);
        throw error;
    }
}

export const CatApi = {
    GetRandomCat
}