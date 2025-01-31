const nodemailer = require("nodemailer");
require("dotenv").config();

exports.sendForexDetails = (req, res) => {
  const { location, currency, quantity, purpose, amount, name, number, email } =
    req.body;

  // Create a transporter object using SMTP
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  // Format the email body
  const emailBody = `
    NEW FOREX REQUEST

    Name: ${name}
    Contact Number: ${number}
    Email: ${email}
    Location: ${location}
    Currency: ${currency}
    Quantity: ${quantity}
    Amount (INR): ${amount}
    Purpose of Visit: ${purpose}
  `;

  // Email options
  const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: `New Forex Request`,
    text: emailBody,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Email error:", error);
      return res.status(500).json({
        success: false,
        message: "Failed to send email",
        error: error.message,
      });
    }

    res.status(200).json({
      success: true,
      message: "Forex request submitted successfully!",
    });
  });
};
