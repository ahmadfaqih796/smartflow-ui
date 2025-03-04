import axios from 'axios';

class HttpClient {
  constructor() {
    this.instance = axios.create({
      baseURL: process.env.REACT_APP_API_URL || 'http://127.0.0.1:8000/api',
      headers: { 'Content-Type': 'application/json' },
    });
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

export default new HttpClient();
