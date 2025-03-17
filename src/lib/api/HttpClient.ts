import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import Cookies from "js-cookie";

type Result<T = any> = {
  status: number;
  message: string;
  data?: T;
};

class HttpClient {
  instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      baseURL: "https://dev.dikahadir.com/flowapi",
      responseType: "json",
      headers: {
        "Content-Type": "application/json",
        Authorization: Cookies.get("token"),
      },
    });

    this.instance.interceptors.request.use(
      (config) => {
        const token = Cookies.get("token");
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error: AxiosError) => Promise.reject(error)
    );
    
    this.instance.interceptors.response.use(
      (response) => response,
      (error: AxiosError<Result>) => {
        if (error.response?.status === 401) {
          window.location.href = `/auth/login?sessionExpired=true`;
        }
        return Promise.reject(error);
      }
    );
  }

  async get<T = any>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<Result<T>>> {
    return this.instance.get(url, config);
  }

  async post<T = any>(
    url: string,
    data: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<Result<T>>> {
    return this.instance.post(url, data, config);
  }

  async put<T = any>(
    url: string,
    data: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<Result<T>>> {
    return this.instance.put(url, data, config);
  }

  async delete<T = any>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<Result<T>>> {
    return this.instance.delete(url, config);
  }
}
export default HttpClient;
