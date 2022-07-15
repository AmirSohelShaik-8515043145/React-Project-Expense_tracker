const express = require("express")
const router = express.Router()
const { addExpense } = require("../controllers/expenseController")

router.post("/createExpense", addExpense)
// router.get("/getExpense", getExpense)

module.exports = router