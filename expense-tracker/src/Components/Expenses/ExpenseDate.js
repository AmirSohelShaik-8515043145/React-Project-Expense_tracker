import "./ExpenseDate.css"

function ExpenseDate(props) {
    let month = props.date.toLocaleString("en-us", { month: "long" });
    let year = props.date.getFullYear();
    let day = props.date.toLocaleString("en-us", { day: "2-digit" });
    return (
        <div className="expense-date">
            <div className="expense-date_day">{day}</div>
            <div className="expense-date_month">{month}</div>
            <div className="expense-date_year">{year}</div>
        </div>
    )

}

export default ExpenseDate