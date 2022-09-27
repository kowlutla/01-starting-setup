import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filterdYear, setFilteredYear] = useState("2021");

  const expensesList = props.expenses;
  const filterChangeHandler = (selectedYear) => {
    console.log("Expenses.js");
    console.log(selectedYear);
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expensesList.filter(
    (expense) => expense.date.getFullYear().toString() === filterdYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterdYear}
          selectedYear={filterChangeHandler}
        />
        <ExpensesList expenses={filteredExpenses}></ExpensesList>
      </Card>
    </div>
  );
};
export default Expenses;
