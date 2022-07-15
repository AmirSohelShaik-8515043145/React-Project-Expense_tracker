const express = require("express")
const bodyparser = require("body-parser")
const mysql =  require("mysql")
const route = require("./routes/route")
const app = express()

const connection = mysql.createConnection({
    host:"localhost",
    user:"Sohel",
    password:"12345",
    database:"expense_db"
})

app.use(bodyparser.json())
// app.use(bodyparser.urlencoded(),{extended:true})

connection.connect((error)=>{
    if(error){
        console.log(error)
    }
    else{
        console.log("MySql is Connected")
    }
})

app.use("/",route)

app.listen(process.env.PORT || 5000 , ()=>{
    console.log("express is running on 5000")
})