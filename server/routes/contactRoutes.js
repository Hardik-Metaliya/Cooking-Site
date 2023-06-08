const express = require("express");
const router = express.Router();
const Contact = require("../models/contact");
const nodemailer = require("nodemailer");
require("dotenv").config();

router.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Save contact form data to MongoDB
    const contact = new Contact({ name, email, message });
    await contact.save();

    // Send email notification
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.Email_ID,
        pass: process.env.Email_ID_Pass,
      },
    });

    const mailOptions = {
      from: process.env.Email_ID,
      to: process.env.To_Email,
      subject: "New Contact Form Submission",
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.json({ success: false });
  }
});

module.exports = router;
