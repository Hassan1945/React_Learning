import React, {useState} from 'react'

import './ExpenseForm.css'

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChange = (event) => {
        setEnteredTitle(event.target.value)
    }
    const amountChange = (event) => {
        setEnteredAmount(event.target.value)
    }
    const dateChange = (event) => {
        setEnteredDate(event.target.value)
    }

    const submitted = (event) => {
        event.preventDefault();                               // jab hum kisi bhi form ko submit krty hain to by default page refresh ho jata hai lekin yaha per hum ny aik function bnaya hai ky jab form submit to jo default events hoty hain wo sab stop ho jaye Example "page refresh" and  "blank input fields" etc
    
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveData(expenseData)
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        // console.log(expenseData)
    }

    return(
        <form onSubmit={submitted}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChange}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="numbers" value={enteredAmount} min="0.01" step="0.01" onChange={amountChange}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" value={enteredDate} onChange={dateChange}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );

}
export default ExpenseForm