const nodemailer = require("nodemailer");
require("dotenv").config();

exports.sendEmail = async (req, res) => {
  const { name, email, number, message } = req.body;

  // Create a transporter using Gmail
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  // Set up email data
  const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL, // Send to your own email
    subject: `Contact Form Submission from ${name}`,
    text: `You have received a new message from the contact form:\n\nName: ${name}\nEmail: ${email}\nPhone: ${number}\nMessage: ${message}`,
  };

  // Send the email
  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Failed to send email.");
  }
};
