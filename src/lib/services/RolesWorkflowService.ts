import { AxiosRequestConfig } from "axios";
import HttpClient from "../api/HttpClient";

class RolesWorkflowService {
  private api: HttpClient;
  constructor() {
    this.api = new HttpClient();
  }

  getRolesWorkflow(config?: AxiosRequestConfig) {
    const response = this.api.get<any>("/department", config );
    return response;
  }

  createRolesWorkflow(data: any) {
    const response = this.api.post<any>("/department", data);
    return response;
  }
}
export default RolesWorkflowService;
