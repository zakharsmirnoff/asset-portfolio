import http from "../http-common.js";

class HoldingsDataService {
    getAll() {
        return http.get("/holdings")
    }
}

export default new HoldingsDataService();