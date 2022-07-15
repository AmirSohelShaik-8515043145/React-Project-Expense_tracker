const mysql = require("mysql")

const connection = mysql.createConnection({
    host: "localhost",
    user: "Sohel",
    password: "12345",
    database: "expense_db"
})

const addExpense = (req, res) => {
    try {
        let data = req.body
        const { id, title, amount } = data
        let sqlQuery = `INSERT INTO EXPENSE VALUES (${id}, "${title}", ${amount})`

        connection.query(sqlQuery, (error, data) => {
            if (error) {
                throw error
            }
            else {
                res.status(201).send({ status: true, data: data })
            }
        })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ status: false, err: err })
    }
}

module.exports = {
    addExpense
}