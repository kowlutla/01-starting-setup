import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React,{useState} from "react";

const DUMMY_DATA = [
  { id: "e2", title: "Cricket Bat", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Cycle",
    amount: 14999,
    date: new Date(2020, 2, 28),
  },
  {
    id: "e4",
    title: "Monitor",
    amount: 14050,
    date: new Date(2021, 5, 12),
  },
];


const App = () => {

  const [expenses,setExpenses]=useState(DUMMY_DATA);

  const addExpenseHandler = (expense) => {
      setExpenses((prevExpenses)=>{
        return [expense,...prevExpenses];
      });
      
  };
  
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
};

export default App;
