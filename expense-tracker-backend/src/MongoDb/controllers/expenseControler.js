const expenseModel = require("../models/expenseModel")

const createExpense = async (req, res) => {
    try {
        let data =  req.body

        let expenseData = await expenseModel.create(data)
        res.status(201).send({status:true , data:expenseData})

    }
    catch (error) {
        res.status(500).send({ status: false, error: error })
    }
}


const getExpense = async (req, res) => {
    try {

        let expenseData = await expenseModel.find({isDeleted:false})
        res.status(201).send({status:true , data:expenseData})

    }
    catch (error) {
        res.status(500).send({ status: false, error: error })
    }
}


// const deleteExpense = async (req, res) => {
//     try {

//         let expenseData = await expenseModel.findOneAndUpdate()
//         res.status(201).send({status:true , data:expenseData})
//     }
//     catch (error) {
//         res.status(500).send({ status: false, error: error })
//     }
// }

module.exports = {
    createExpense,
    getExpense
}