// models/ticket.js
const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");
//Modelo de tickets
const Ticket = sequelize.define("ticket", {
  ticketNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
    defaultValue: function () {
      return Math.floor(10000 + Math.random() * 90000);
    },
  },
});

module.exports = Ticket;
