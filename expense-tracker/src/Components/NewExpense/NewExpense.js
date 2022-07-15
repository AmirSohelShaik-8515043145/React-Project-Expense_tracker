import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css"

function NewExpense(props){

    function saveExpenseDataHandler(expenseData){
        let expenseData1 = {
            ...expenseData
        }
        props.onAddExpense(expenseData1)
    }



    return(
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    )
}

export default NewExpense
