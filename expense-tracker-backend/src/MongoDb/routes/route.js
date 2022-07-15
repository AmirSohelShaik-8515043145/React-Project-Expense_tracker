const express = require("express")
const router = express.Router()
const { createExpense, getExpense } = require("../controllers/expenseControler")

router.post("/createExpense", createExpense)
router.get("/getExpense", getExpense)

module.exports = router





// import Expenses from "./Components/Expenses/Expenses"
// import React from "react"
// import NewExpense from "./Components/NewExpense/NewExpense";


// let Dummy_Expense = [];

// function App() {

//     const [expenses, setExpenses] = React.useState(Dummy_Expense)

//     function fetchData(){
//         fetch("http://localhost:5000/getExpense")
//             .then((response) => {
//                 return response.json()
//             })
//             .then((data) => {
//                 setExpenses(data)
//             })
//     }


//     React.useEffect(() => {fetchData()}, [])


//     function addExpenseHandler(expense) {
//         fetch("http://localhost:5000/createExpense",{
//             method:"POST",
//             body:JSON.stringify(expense),
//             headers:{
//                 "content-type":"application/json"
//             }
//         }).then(res=>{
//             fetchData()
//         })
//     }

//     return (
//         <div>
//             <NewExpense onAddExpense={addExpenseHandler} />
//             <Expenses item={expenses} />
//         </div>
//     )
// }
// export default App