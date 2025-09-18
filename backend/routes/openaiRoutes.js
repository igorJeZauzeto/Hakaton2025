const express = require("express");
const router = express.Router();
const { chatWithOpenAI } = require("../controllers/openaiController");

router.post("/translate", chatWithOpenAI);

module.exports = router;
