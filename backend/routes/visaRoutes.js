const express = require("express");
const router = express.Router();
const { submitVisaForm } = require("../controllers/visaController");

router.post("/", submitVisaForm);

module.exports = router;
