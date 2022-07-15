import Expenses from "./Components/Expenses/Expenses"
import React from "react"
import NewExpense from "./Components/NewExpense/NewExpense";

let DUMMY_EXPENSE = [
    {
        id: "e1",
        title: "School Fee",
        amount: 900,
        date: new Date(2022, 7, 1)
    }
];
function App() {

    const [expenses, setExpenses] = React.useState(DUMMY_EXPENSE)

    function fetchData() {
        fetch("http://localhost:5000/getExpense")
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setExpenses(data)
            })
    }


    React.useEffect(() => { fetchData() }, [])


    const addExpenseHandler = (expense) => {
        fetch("http://localhost:5000/createExpense", {
            method: "POST",
            body: JSON.stringify(expense),
            headers: {
                "content-Type": "application/json"
            }
        }).then(res => {
            fetchData()
        })

        const updatedExpense = [expense, ...expenses]
        setExpenses(updatedExpense)
    }

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses item={expenses} />
        </div>
    )
}
export default App