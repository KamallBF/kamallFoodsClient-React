import {baseApi} from "./calls";

const loginSession = (loginCredentials) => {
    return baseApi.post("Users/login", loginCredentials);
};

const logout = () => {
    return baseApi.post("Users/logout");
}

const getCurrentUser = () => {
    return baseApi.get("Users/authorize");
}

const signupUser = (signUpCredentials) => {
    return baseApi.post("Users/register", signUpCredentials)
}

export {loginSession, logout, getCurrentUser, signupUser}
