import './ExpenseItem.css'
function ExpenseItem(props) {
  const expenseDate = new Date(2023, 25, 5)
  const expenseTitle = "Car Insurance";
  const expenseAmout = 222.54;
  return (
    <div className="expense-item">
      <h2>{expenseDate.toISOString()}</h2>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${expenseAmout}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
