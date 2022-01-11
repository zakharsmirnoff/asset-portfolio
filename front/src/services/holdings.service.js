import http from "../http-common.js";

class HoldingsDataService {
    getAll() {
        return http.get("/holdings")
    }

    create(data) {
        return http.post("/holdings", data)
    }
}

export default new HoldingsDataService();