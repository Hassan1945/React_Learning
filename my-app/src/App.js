import Expenses from './comp/Expenses/Expenses'
import React, { useEffect, useState } from 'react';
import NewExpense from './comp/NewExpenses/NewExpense';




let Dummy_Expense 
const App = () => {

    const [expenses, setExpenses] = useState(Dummy_Expense);

    function fetchData(){

        fetch('https://api.sampleapis.com/switch/games')
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    setExpenses(data);
                })
        
    }

    useEffect(() => {

        fetchData();
    }, [])



    const addExpenseHandler = (expense) => {

        const updatedExpense = [expense, ...expenses];
        setExpenses (updatedExpense);
    }

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />         {/* ye value update krny wala form hai/*}

            {/* ye niche vali line Expenses mein se data ko dikhany ky liye hai */}
            <Expenses item={expenses} />  
        </div>
    )
}
export default App;






