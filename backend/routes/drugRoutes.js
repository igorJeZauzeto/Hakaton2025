const express = require("express");
const router = express.Router();
const drugController = require("../controllers/drugController");

router.get("/Drug", drugController.getDrugs);
router.get("/Drug/:id", drugController.getDrugById);
router.post("/Drug", drugController.createDrug);
router.put("/Drug/:id", drugController.updateDrug);
router.delete("/Drug/:id", drugController.deleteDrug);

module.exports = router;
