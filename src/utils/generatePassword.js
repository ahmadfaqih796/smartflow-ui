import CryptoJS from "crypto-js";

const SECRET_KEY = process.env.REACT_APP_AES_KEY;

function hexStringToWordArray(value) {
   return CryptoJS.enc.Hex.parse(value);
 }

export const encryptPassword = (text) => {
  const key = hexStringToWordArray(SECRET_KEY);
  const encrypted = CryptoJS.AES.encrypt(text, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  });
  return encrypted.toString();
};

export const decryptPassword = (text) => {
  const key = hexStringToWordArray(SECRET_KEY);
  const decrypted = CryptoJS.AES.decrypt(text, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  });
  return decrypted.toString(CryptoJS.enc.Utf8);
};
