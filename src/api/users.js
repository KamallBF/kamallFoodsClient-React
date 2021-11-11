import {baseApi} from "./calls";

const getCurrentUser = () => {
    const response = baseApi.get("Users/" + localStorage.getItem("user_ID"));
    return response.data.data;
}

const signupUser = (signUpCredentials) => {
    const response = baseApi.post("Users/register", signUpCredentials);
    return response;
}

export {getCurrentUser, signupUser}
