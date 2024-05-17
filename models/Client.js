// models/Client.js
const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");
//Modelo de clientes
const Client = sequelize.define("client", {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
/* Client.prototype.toJSON = function () {
  const values = Object.assign({}, this.get());
  delete values.password;
  return values;
}; */

module.exports = Client;
