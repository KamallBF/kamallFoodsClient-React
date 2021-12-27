import {baseApi} from "./calls";

const loginSession = (loginCredentials) => {
    return baseApi.post("Auth/login", loginCredentials);
};

const logout = () => {
    return baseApi.post("Auth/logout");
}

const getCurrentUser = () => {
    return baseApi.get("Users/current");
}

const signupUser = (signUpCredentials) => {
    return baseApi.post("Users/register", signUpCredentials)
}

export {loginSession, logout, getCurrentUser, signupUser}
