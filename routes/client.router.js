const express = require("express");
const clientsController = require("../controllers/client.controllers");
const router = express.Router();
//rutas de clients
router.post("/register", clientsController.create);
router.post("/login", clientsController.login);

module.exports = router;
