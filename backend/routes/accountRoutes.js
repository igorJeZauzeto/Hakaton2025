const express = require("express");
const router = express.Router();
const accountController = require("../controllers/accountController");

router.get("/Account", accountController.getAccounts);
router.get("/Account/:id", accountController.getAccountById);
router.post("/Account", accountController.createAccount);
router.put("/Account/:id", accountController.updateAccount);
router.delete("/Account/:id", accountController.deleteAccount);

module.exports = router;