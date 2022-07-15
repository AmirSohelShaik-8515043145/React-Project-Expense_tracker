const express = require("express")
const bodyparser = require("body-parser")
const mongoose = require("mongoose")
const route = require("./routes/route")

const app = express()


// const staticPath = path.join(__dirname,"../../../expense-tracker/public")
// app.use(express.static(staticPath))


app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))

mongoose.connect("mongodb+srv://amir-thorium:NSE7ZdUlu4no9WRF@cluster0.gchuo.mongodb.net/Expense-Data?authSource=admin&replicaSet=atlas-cw2o95-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true", { useNewUrlParser: true })
    .then(() => console.log("Mongodb connected"))
    .catch((err) => console.log(err))

app.use("/", route)

app.listen(process.env.PORT || 5000, () => {
    console.log("express is running on 5000")
})