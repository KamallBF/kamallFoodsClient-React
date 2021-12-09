import axios from 'axios'
import {decrypt} from "../helpers/aes_helper";

//const baseUrl = "https://localhost:44301/";
const baseUrl = "https://git.heroku.com/kamall-foods-server.git/";

const baseApi = axios.create({
    baseURL: baseUrl,
    headers: {
        "Content-Type": "application/json",
        "Accept": "*/*",
        'Authorization': 'Bearer ' +  decrypt(localStorage.getItem('access_token'))
    },
});

baseApi.interceptors.request.use(req => {
    req.headers['Authorization']= 'Bearer ' +  decrypt(localStorage.getItem('access_token'));
    return req;
}, error => {
    return Promise.reject(error);
});

export {baseApi}
