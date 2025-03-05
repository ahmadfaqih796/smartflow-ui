import HttpClient from "../api/HttpClient";


class AuthService {
  constructor() {
    this.api = new HttpClient();
  }

  login(credentials) {
    const response = this.api.post("/login", credentials);
    return response;
  }
}
export default AuthService;
