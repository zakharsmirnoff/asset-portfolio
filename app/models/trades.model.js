const { sequelize } = require("../configs/db.config.js");
const { DataTypes } = require("sequelize");

const trades = sequelize.define(
  "trades",
  {
    trade: {
      type: DataTypes.STRING,
    },
    amount: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.FLOAT,
    },
    totalValue: {
      type: DataTypes.FLOAT,
    },
    purchasePrice: {
      type: DataTypes.FLOAT,
    },
    profit: {
      type: DataTypes.FLOAT,
    },
  },
  { freezeTableName: true }
);

exports.trades = trades;
