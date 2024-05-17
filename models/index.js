//Relacion de tablas
const Ticket = require("./Ticket");
const Client = require("./Client");
Ticket.belongsTo(Client); //UserId
Client.hasMany(Ticket);
