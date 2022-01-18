const { trades } = require("../models/trades.model.js");

exports.create = (req, res) => {
  if (!req.body) {
    res.send({ message: "The body can not be empty" });
    return;
  }

  const trade = {
    trade: req.body.trade,
    amount: req.body.amount,
    price: req.body.price,
    totalValue: req.body.totalValue,
    purchasePrice: req.body.purchasePrice,
    profit: req.body.profit,
  };

  trades
    .create(trade)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(500).send({
        message: "Some error occured",
      });
    });
};

exports.findAll = (req, res) => {
  trades
    .findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

exports.update = (req, res) => {
  const id = req.params.id;
  trades
    .update(req.body, { where: { id: id } })
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log(error);
    });
};
