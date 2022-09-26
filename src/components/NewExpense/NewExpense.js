import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {

    const onSaveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData={
            ...enteredExpenseData,
            id:Math.random().toString(),
            title:enteredExpenseData.title,
            amount:enteredExpenseData.amount,
            date:enteredExpenseData.date
        }

        console.log("New Expense" ,expenseData);
        props.onAddExpense(expenseData);
    }
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
