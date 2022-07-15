const mongoose = require("mongoose")

const expenseSchema = new mongoose.Schema({
    title: {
        type: String
    },
    amount: {
        type: Number
    },
    date: {
        type: Date
    },
    isDeleted: {
        default: false
    }
}, { timestamps: true })

module.exports = mongoose.model("expenses", expenseSchema)