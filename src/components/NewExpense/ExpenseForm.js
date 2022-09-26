import React from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
   
  return (
    <form>
      <div className="new-expense__controls">
        <div className='new-expense__control'>
          <label for="title">Title</label>
          <input type="text" id="title" className="new-expense__control input"></input>
        </div>

        <div className="new-expense__control">
          <label for="amount">Amount</label>
          <input type="number" id="amount" min="0.01" step="0.01"></input>
        </div>

        <div className="new-expense__control">
          <label for="date">Date</label>
          <input
            type="date"
            id="date"
            min="2019-01-01"
            max="2022-12-31"
          ></input>
        </div>

        <div className="new-expense__actions">
            <button type="submit"> Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
