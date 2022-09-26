import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";

function Expenses(props) {
  const expenses = props.expenses;
  return (
    <Card className="expenses">
      <ExpenseItem
        expenseTitle={expenses[0].title}
        expenseAmount={expenses[0].amount}
        expenseDate={expenses[0].date}
      ></ExpenseItem>

      <ExpenseItem
        expenseTitle={expenses[1].title}
        expenseAmount={expenses[1].amount}
        expenseDate={expenses[1].date}
      ></ExpenseItem>

      <ExpenseItem
        expenseTitle={expenses[2].title}
        expenseAmount={expenses[2].amount}
        expenseDate={expenses[2].date}
      ></ExpenseItem>

      <ExpenseItem
        expenseTitle={expenses[3].title}
        expenseAmount={expenses[3].amount}
        expenseDate={expenses[3].date}
      ></ExpenseItem>
    </Card>
  );
}
export default Expenses;
