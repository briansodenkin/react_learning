import React from 'react';

import ExpensesForm from './ExpensesForm';
import './NewExpenses.css';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
        enteredExpenseData,
        id: Math.random()
    }
    console.log(expenseData)
    props.OnAddExpense(expenseData);
  };
  return (
    <div className='new-expense'>
      <ExpensesForm OnSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  );
};

export default NewExpense;