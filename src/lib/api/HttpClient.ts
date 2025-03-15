import axios from "axios";
import Cookies from "js-cookie";
import { AxiosInstance, AxiosRequestConfig } from "axios";

type ErrorResponse = {
  message: string;
  response?: any
}

class HttpClient {
  instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      baseURL: "/api",
      responseType: "json",
      headers: {
        "Content-Type": "application/json",
        Authorization: Cookies.get("token"),
      },
    });
    this.instance.interceptors.request.use(
      (response: any) => response,
      (error: { response: { data: { message: string } } }) => {
        if (error?.response?.data?.message === "Invalid Token") {
          window.location.href = `/auth/login?sessionExpired=true`;
        }
        return Promise.reject(error);
      }
    );
  }

  get(url: any, config: AxiosRequestConfig) {
    return this.instance.get(url, config);
  }

  post(url: any, data: any, config: AxiosRequestConfig) {
    return this.instance.post(url, data, config);
  }

  put(url: any, data: any, config: AxiosRequestConfig) {
    return this.instance.put(url, data, config);
  }

  delete(url: any, config: AxiosRequestConfig) {
    return this.instance.delete(url, config);
  }
}
export default HttpClient;
