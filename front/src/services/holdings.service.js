import http from "../http-common.js";

class HoldingsDataService {
    getAll() {
        return http.get("/holdings")
    }

    create() {
        return http.post("/holdings")
    }
}

export default new HoldingsDataService();