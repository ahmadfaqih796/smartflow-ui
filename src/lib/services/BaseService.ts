import { AxiosRequestConfig } from "axios";
import HttpClient from "../api/HttpClient";

class BaseService {
  private api: HttpClient;
  constructor() {
    this.api = new HttpClient();
  }

  get(url: string ,config?: AxiosRequestConfig) {
    const response = this.api.get<any>(url, config );
    return response;
  }

  post(url: string, data: any) {
    const response = this.api.post<any>(url, data);
    return response;
  }

  delete(url: string, id: any) {
   const response = this.api.delete<any>(`${url}/${id}`);
   return response;
 }
}
export default BaseService;
