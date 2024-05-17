const express = require("express");
const ticketsController = require("../controllers/tickets.controllers");
const router = express.Router();
//Rutas de tickets
router.post("/request", ticketsController.createTicketsAndSendEmail);

module.exports = router;
