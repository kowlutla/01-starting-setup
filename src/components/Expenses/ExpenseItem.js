import "./ExpenseItem.css";
import React,{useState} from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card"

const ExpenseItem = (props) =>{
  const expenseAmount = props.expenseAmount;
  const[expenseTitle,setExpenseTitle]=useState(props.expenseTitle);

  const clickHandler =()=>{
    setExpenseTitle("Updated!"+expenseTitle);
    console.log(expenseTitle);

  }

  return (
    <Card className="expense-item">
      <ExpenseDate expenseDate={props.expenseDate} />
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">{expenseAmount}</div>
      </div>

      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
