import axios from 'axios';

const API_URL = 'https://5f616fc907c1770016c5207a.mockapi.io/products';

const productAPI = {
    /**
     * List items
     */
    list: async () => {
        const { data } = await axios.get(API_URL);
        return data;
    }
};