import {baseApi} from "./calls";

const loginSession = (loginCredentials) => {
    const response = baseApi.post("Users/login", loginCredentials)
    return response.data.data
};

const logout = () => {

}

export {loginSession}
