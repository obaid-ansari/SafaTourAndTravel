//
require("dotenv").config();
const express = require("express");
const path = require("path");
const flightRoutes = require("./routes/flightRoutes");
const forexRoutes = require("./routes/forexRoutes");
const hotelsRoutes = require("./routes/hotelsRoutes");
const visaRoutes = require("./routes/visaRoutes");
const contactRoutes = require("./routes/contactRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static("frontend"));
app.use(express.json());

// Serve HTML Forms
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "forms", "flight.html")); 
  res.sendFile(path.join(__dirname, "frontend", "forms", "forexexchange.html"));
  res.sendFile(path.join(__dirname, "frontend", "forms", "hotels.html"));
  res.sendFile(path.join(__dirname, "frontend", "forms", "visa.html"));
});

// Use routes
app.use("/api/flights", flightRoutes);
app.use("/api/visa", visaRoutes);
app.use("/api/forex", forexRoutes);
app.use("/api/hotels", hotelsRoutes); //
app.use("/api/contacts", contactRoutes); // Register contact routes

app.post("/send-email", (req, res) => {
  // Logic to send email
  res.send("Email sent successfully!");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
