const express = require("express");
const routerClient = require("./client.router");
const routerTicket = require("./ticket.router");
const router = express.Router();

// colocar las rutas aquí
router.use("/client", routerClient);
router.use("/ticket", routerTicket);
module.exports = router;
