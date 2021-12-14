import axios from 'axios'

const baseUrl = "https://localhost:5001/";
//const baseUrl = "https://www.kamall-foods-server.xyz/";

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
    if ((error.response.statusText === "Unauthorized") && (localStorage.getItem('access_token') !== null)){
        console.log("Session expired")
    }
    return Promise.reject(error);
});

export {baseApi}
