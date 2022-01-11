import http from "../http-common.js";

class TradesDataService {
  getAll() {
    return http.get("/trades");
  }
}

export default new TradesDataService();
