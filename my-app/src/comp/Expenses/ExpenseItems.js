import './ExpenseItem.css'

// import ExpenseDate from './ExpenseDate.js'
import React from 'react'
import Card from '../UI/card'

const ExpenseItem = (props) => {
  

    return(
        <Card className='expense-item'>
            <div className='expense-item__description'>
                <p>{props.datej}</p>
                <p>{props.datena }</p>
                <p>{props.datee }</p>
                <p>{ props.title }</p>
                {/* <p>{ props.name }</p> */}
                <p>{ props.genre }</p>
                <p>{ props.developers }</p>
                <p>{ props.publishers }</p>
                <p>{props.id}</p>
                {/* <p>{props.no}</p> */}
                <div className='expense-item__price'>${ props.amount }</div>
            </div>
        </Card>
    );
}
export default ExpenseItem