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

    // Send confirmation email to the user
    const confirmationMailOptions = {
      from: process.env.Email_ID,
      to: email,
      subject: "Contact Form Submission Confirmation",
      html: `
        <style>
          body {
            font-family: Arial, sans-serif;
          }
          h1 {
            color: #333;
            font-size: 24px;
            margin-bottom: 16px;
          }
          p {
            margin-bottom: 8px;
          }
          ul {
            padding-left: 24px;
          }
          li {
            list-style-type: disc;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 24px;
            border: 1px solid #ddd;
            border-radius: 4px;
            background-color: #f9f9f9;
          }
          .footer {
            margin-top: 16px;
            text-align: center;
          }
        </style>
        <div class="container">
          <h1>Thank You for Contacting Us</h1>
          <p>Dear ${name},</p>
          <p>Thank you for contacting us. We have received your message and will get back to you soon.</p>
          <p>Here are the details you provided:</p>
          <ul>
            <li><strong>Name:</strong> ${name}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Message:</strong> ${message}</li>
          </ul>
          <p class="footer">Best Regards,<br>We Cook </p>
       <p class="footer"><a href="https://wecook-hardikmetaliya.netlify.app/" class="website-link">Visit Our Website</a></p>
        </div>
      `,
    };

    await transporter.sendMail(confirmationMailOptions);

    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.json({ success: false });
  }
});

module.exports = router;
