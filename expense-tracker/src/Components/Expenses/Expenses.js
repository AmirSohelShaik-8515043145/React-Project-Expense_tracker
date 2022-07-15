import React from 'react';
import './Expenses.css'
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';




function Expenses(props) {
     return (
          <Card className='expenses'>
               {
                    props.item.map(element =>
                    (<ExpenseItem
                         key={element._id}
                         date={element.date}
                         title={element.title}
                         amount={element.amount} />)
                    )
               }
          </Card>
     )
}

export default Expenses;