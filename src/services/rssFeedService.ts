import { config } from "../config/index.js";
import axios, { AxiosError, AxiosResponse } from 'axios';

class RssFeedService {
    constructor() { /* constructor is empty */ }

    async searchSection (keyword?: string) {
        const apiKey: string = config.apiKey;
        let data;

        await axios.get(`https://content.guardianapis.com/search?page=1&format=json&q=${keyword}&api-key=${apiKey}&show-fields=all`)
            .then(function( response: AxiosResponse ){
                data = response.data;
            })
            .catch(function ( error: any ) {
                throw new Error(error);
            });

        return data;
    }
}

export default new RssFeedService();