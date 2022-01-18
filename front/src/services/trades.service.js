import http from "../http-common.js";

class TradesDataService {
  getAll() {
    return http.get("/trades");
  }

  create(data) {
    return http.post("/trades", data);
  }
}

export default new TradesDataService();
