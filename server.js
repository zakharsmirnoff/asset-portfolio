const express = require("express");
const cors = require("cors");
const { holdings } = require("./app/models/holdings.model.js");
const { trades } = require("./app/models/trades.model.js");

const app = express();

const corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

holdings.sync({});
trades.sync();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the application",
  });
});

const PORT = process.env.PORT || 8080;

require("./app/routes/holdings.routes.js")(app);
require("./app/routes/trades.routes.js")(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
