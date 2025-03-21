import CryptoJS from "crypto-js";

const SECRET_KEY = '5a288ea370e79a44d6029c943596e5fc5e62f3bb874fc05b23b8dab921faa470';

function hexStringToWordArray(value : string) {
   return CryptoJS.enc.Hex.parse(value);
 }

export const encryptPassword = (text : string) => {
  const key = hexStringToWordArray(SECRET_KEY);
  const encrypted = CryptoJS.AES.encrypt(text, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  });
  return encrypted.toString();
};

export const decryptPassword = (text : string) => {
  const key = hexStringToWordArray(SECRET_KEY);
  const decrypted = CryptoJS.AES.decrypt(text, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  });
  return decrypted.toString(CryptoJS.enc.Utf8);
};
