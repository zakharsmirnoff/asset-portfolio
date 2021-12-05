module.exports = (app) => {
  const trades = require("../controllers/trades.controller.js");

  const router = require("express").Router();

  router.post("/", trades.create);

  router.get("/", trades.findAll);

  router.put("/", trades.update);

  app.use("/api/trades", router);
};
