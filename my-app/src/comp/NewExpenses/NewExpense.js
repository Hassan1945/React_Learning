import React from 'react'

import './NewExpense.css'

import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const newFormData = (enteredData) => {
        const expenseData = {
            ...enteredData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        // console.log(expenseData)
    }

    return(
        <div className='new-expense'>
            <ExpenseForm onSaveData={newFormData}/>
        </div>
    );
}

export default NewExpense