import { AxiosRequestConfig } from "axios";
import HttpClient from "../api/HttpClient";

class BaseService {
  private api: HttpClient;
  constructor() {
    this.api = new HttpClient();
  }

  get(url: string, config?: AxiosRequestConfig) {
    try {
      const response = this.api.get<any>(url, config);
      return response;
    } catch (error) {
      throw error;
    }
  }

  post(url: string, data: any) {
    try {
      const response = this.api.post<any>(url, data);
      return response;
    } catch (error) {
      throw error;
    }
  }

  delete(url: string, id: any) {
    try {
      const response = this.api.delete<any>(`${url}/${id}`);
      return response;
    } catch (error) {
      throw error;
    }
  }
}
export default BaseService;
