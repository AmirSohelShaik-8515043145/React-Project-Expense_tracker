import React from 'react';
import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate"
import Card from '../UI/Card';

function ExpenseItem(props) {

    // const [newTitle,setNewTitle] = React.useState();
    // const [title,setTitle] = React.useState(props.title);
    // function clickHandler() {
    //     setTitle(newTitle)
    // }

    // function changeHandler(event){
    //     setNewTitle(event.target.value)
    // }

    return (
        <Card className="expense-item">
            <div>
                <ExpenseDate date={props.date} />
            </div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.amount} Rs</div>
            </div>
            
        </Card>
    )
}

export default ExpenseItem