const nodemailer = require("nodemailer");
require("dotenv").config();

const submitVisaForm = async (req, res) => {
  const {
    fullName,
    email,
    phone,
    purpose,
    visaType,
    journeyType,
    returnDate,
    country,
    departureDate,
  } = req.body;

  // Create a transporter for sending emails
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: "Visa Application Submission",
    text: `\nHere are your submitted details:\n\n- Full Name: ${fullName}\n- Email: ${email}\n- Phone: ${phone}\n- Purpose of Visit: ${purpose}\n- Journey Type: ${journeyType}\n- Departure Date: ${departureDate}\n- Return Date: ${
      returnDate || "N/A"
    }\n- Country: ${country}\n- Visa Type: ${visaType}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("Form submitted successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Error submitting the form. Please try again.");
  }
};

module.exports = { submitVisaForm };
