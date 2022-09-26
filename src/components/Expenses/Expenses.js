import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";

const Expenses = (props) => {
  const [filterdYear, setFilteredYear] = useState("2020");

  const expensesList = props.expenses;
  const filterChangeHandler = (selectedYear) => {
    console.log("Expenses.js");
    console.log(selectedYear);
    setFilteredYear(selectedYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterdYear}
          selectedYear={filterChangeHandler}
        />
        {expensesList.map((e) => {
          return (
            <ExpenseItem
              key={e.id}
              expenseTitle={e.title}
              expenseAmount={e.amount}
              expenseDate={e.date}
            />
          );
        })}
      </Card>
    </div>
  );
};
export default Expenses;
