import AES from "crypto-js/aes";
import Utf8 from "crypto-js/enc-utf8";

const privateKey = 'b75524255a7f54d2726a951bb39204df';

const encrypt = (token) => {
    return AES.encrypt(token, privateKey).toString();
}

const decrypt = (encrypted_token) => {
    if (encrypted_token == null)
        return;
    const bytes = AES.decrypt(encrypted_token, privateKey);
    return bytes.toString(Utf8);
}

export {encrypt, decrypt}
