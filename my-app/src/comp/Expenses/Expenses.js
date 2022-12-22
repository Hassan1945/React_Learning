import './Expenses.css'
import ExpenseItem from './ExpenseItems'
import Card from '../UI/card'
import React from 'react'


const Expenses = (props) => {
    return (<Card className='expenses'>
        {
            props.item.map(
                expense => (
                    <ExpenseItem
                        key={expense.id}
                        id={expense.id}
                        datej={expense.releaseDates.Japan}
                        datena={expense.releaseDates.NorthAmerica}
                        datee={expense.releaseDates.Europe}
                        title={expense.name}
                        name={expense.title}
                        genre={expense.genre}
                        developers={expense.developers}
                        publishers={expense.publishers}
                        amount={expense.amount}
                    />
                                        
                )
            )
        }
    </Card>)
}

export default Expenses