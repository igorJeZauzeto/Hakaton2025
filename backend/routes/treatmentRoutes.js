const express = require("express");
const router = express.Router();
const treatmentController = require("../controllers/treatmentController");

router.get("/Treatment", treatmentController.getTreatments);
router.get("/Treatment/", treatmentController.getTreatmentByIds);
router.post("/Treatment", treatmentController.createTreatment);
router.put("/Treatment/", treatmentController.updateTreatment);
router.delete("/Treatment/:id", treatmentController.deleteTreatment);

module.exports = router;
