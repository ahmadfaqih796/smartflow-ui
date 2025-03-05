import axios from 'axios';
import Cookies from "js-cookie";

class HttpClient {
  constructor() {
    this.instance = axios.create({
      baseURL: "/api",
      responseType: 'json',
      headers: { 
        'Content-Type': 'application/json',
        Authorization: Cookies.get("token")
       },
    });
    this.instance.interceptors.request.use(
      response => response,
      error => {
        if (error?.response?.data?.message === "Invalid Token") {
          window.location.href = `/auth/login?sessionExpired=true`;
        }
        return Promise.reject(error);
      }
    )
  }

  get(url, config) {
    return this.instance.get(url, config);
  }

  post(url, data, config) {
    return this.instance.post(url, data, config);
  }

  put(url, data, config) {
    return this.instance.put(url, data, config);
  }

  delete(url, config) {
    return this.instance.delete(url, config);
  }
}
export default HttpClient;
