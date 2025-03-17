import HttpClient from "../api/HttpClient";

type Credentials = {
   username: string;
   password: string;
};

class AuthService {
   private api: HttpClient;
  constructor() {
    this.api = new HttpClient();
  }

  login(credentials : Credentials) {
    const response = this.api.post<any>("/login", credentials);
    return response;
  }
}
export default AuthService;
