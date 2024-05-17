const catchError = require("../utils/catchError");
const Client = require("../models/Client");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
//Controlador para crear usuario
const create = catchError(async (req, res) => {
  const { email, password, name } = req.body;
  const hashPassword = await bcrypt.hash(password, 10);

  const body = {
    email,
    password: hashPassword,
    name,
  };

  const result = await Client.create(body);

  return res.status(201).json(result);
});
//Controlador para login
const login = catchError(async (req, res) => {
  const { email, password } = req.body;
  const user = await Client.findOne({ where: { email } });
  if (!user) return res.sendStatus(401);
  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) return res.sendStatus(401);
  const token = jwt.sign({ user }, process.env.TOKEN_SECRET, {
    expiresIn: "1d",
  });

  return res.json({ user, token });
});

module.exports = {
  login,
  create,
};
