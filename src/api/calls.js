import axios from 'axios'
import {getCurrentUser} from "./sessions";

const baseUrl = process.env.REACT_APP_BASEURL_TEST;

const baseApi = axios.create({
    baseURL: baseUrl,
    withCredentials: true,
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

baseApi.interceptors.response.use(res => {
    return res;
}, error => {
    if ((error.response.status === 401)) {
        baseApi.post(baseUrl + "Users/refresh", {})
            .then(async () => {
                await getCurrentUser();
                window.location.reload();
            })
    }
    return Promise.reject(error);
});

export {baseApi}
