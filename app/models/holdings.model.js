const { sequelize } = require('../configs/db.config.js')
const { DataTypes } = require("sequelize");

const holdings = sequelize.define(
  "holdings",
  {
    name: {
      type: DataTypes.STRING,
    },
    amount: {
      type: DataTypes.FLOAT,
    },
    totalCost: {
      type: DataTypes.FLOAT,
    },
    averagePrice: {
      type: DataTypes.FLOAT,
    },
    amountSold: {
      type: DataTypes.FLOAT,
    },
    totalValueSold: {
      type: DataTypes.FLOAT,
    },
  },
  {
    freezeTableName: true,
  }
);

exports.holdings = holdings;