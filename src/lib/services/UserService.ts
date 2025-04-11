import { AxiosRequestConfig } from "axios";
import HttpClient from "../api/HttpClient";

class UserService {
  private api: HttpClient;
  constructor() {
    this.api = new HttpClient();
  }

  getUsers(config?: AxiosRequestConfig) {
    const response = this.api.get<any>("/agent", config );
    return response;
  }

  createUser(data: any) {
    const response = this.api.post<any>("/agent", data);
    return response;
  }
}
export default UserService;
