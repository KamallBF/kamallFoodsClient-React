import {baseApi} from "./calls";

const loginSession = (loginCredentials) => {
    return baseApi.post("Users/login", loginCredentials);
};

const logout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('user_infos');
    window.location.reload();

    return new Promise(resolve => {
    })
}

const getCurrentUser = () => {
    return baseApi.get("Users/authorize");
}

const signupUser = (signUpCredentials) => {
    return baseApi.post("Users/register", signUpCredentials)
}

export {loginSession, logout, getCurrentUser, signupUser}
