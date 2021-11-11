import axios from 'axios'
//import { useCookies } from 'react-cookie';

const baseUrl = "https://localhost:49155/";

const baseApi = axios.create({
    baseURL: baseUrl,
    headers: {
        "Content-Type": "application/json",
        "Accept": "*/*",
    },
});

baseApi.interceptors.request.use(req => {
    return req;
}, error => {
    return Promise.reject(error);
});

export {baseApi}
