module.exports = (app) => {
  const holdings = require("../controllers/holdings.controller.js");

  const router = require("express").Router();

  router.post("/", holdings.create);

  router.get("/", holdings.findAll);

  router.put("/:id", holdings.update);

  app.use("/api/holdings", router);
};
