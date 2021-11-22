const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'databases/portfolio.sqlite'
});

exports.sequelize = sequelize;