import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '6bef4b8882874ab89e7fee69c41eab65',
    },
});