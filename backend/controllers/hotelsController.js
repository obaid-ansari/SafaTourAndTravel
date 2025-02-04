const nodemailer = require("nodemailer");
require("dotenv").config();

exports.bookHotel = (req, res) => {
  const {
    yourName,
    phone,
    email,
    hotelLocation,
    starRating,
    checkIn,
    checkOut,
    rooms,
    guests,
  } = req.body;

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
    subject: "New Hotel Booking",
    text: `New booking details:\nName: ${yourName}\nPhone: ${phone}\nEmail: ${email}\nHotel Location: ${hotelLocation}\nHotel Rating: ${starRating}\nCheck In: ${checkIn}\nCheck Out: ${checkOut}\nRooms: ${rooms}\nGuests: ${guests}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).json({ message: "Booking details sent to your email!" });
  });
};
