const express = require("express");
const router = express.Router();
const { chatWithOpenAI, testList } = require("../controllers/openaiController");

router.post("/translate", chatWithOpenAI);
router.post("/testList", testList);

module.exports = router;
