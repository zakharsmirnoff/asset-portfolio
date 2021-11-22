const { holdings } = require("../models/holdings.model.js");

exports.create = (req, res) => {
  if (!req.body) {
    res.send({
      message: "Can not be empty",
    });
    return;
  }

  const position = {
    name: req.body.name,
    amount: req.body.amount,
    totalCost: req.body.totalCost,
    averagePrice: req.body.averagePrice,
    amountSold: req.body.amountSold,
    totalValueSold: req.body.totalValueSold,
  };

  holdings
    .create(position)
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
  holdings
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
  holdings
    .update(req.body, { where: { id: id } })
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log(error);
    });
};
