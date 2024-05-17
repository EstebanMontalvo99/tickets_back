const Ticket = require("../models/Ticket");
const nodemailer = require("nodemailer");
const sendEmail = require("../utils/sendEmails");

//Controlador para crear tickets
const createTicketsAndSendEmail = async (req, res) => {
  const { name, email, numberOfTickets } = req.body;
  // Validaciones
  if (!validateEmail(email)) {
    return res.status(400).json({ message: "Invalid email address" });
  }

  if (numberOfTickets <= 0) {
    return res
      .status(400)
      .json({ message: "Number of tickets must be greater than 0" });
  }
  try {
    const tickets = [];
    for (let i = 0; i < numberOfTickets; i++) {
      const newTicket = await Ticket.create({});
      tickets.push(newTicket);
    }

    const emailOptions = {
      to: email,
      subject: "Boletos Comprados",
      html: `
    <p>Hola <b>${name}</b>. Aquí están tus boletos.</p>
    <ul>
      ${tickets
        .map(
          (ticket) =>
            `<li>Id del Ticket: ${ticket.id}, Número: ${ticket.ticketNumber}</li>`
        )
        .join("")}
    </ul>`, // Datos para mandar el mail
    };

    try {
      const response = await sendEmail(emailOptions);
      console.log(response.message);
    } catch (error) {
      console.error(error.message);
    } // Enviar correo

    res.status(200).json({
      message: "Tickets created and email sent successfully",
      tickets: tickets,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};
// Validaciones
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

module.exports = {
  createTicketsAndSendEmail,
};
