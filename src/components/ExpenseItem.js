import './ExpenseItem.css'
function ExpenseItem() {
  return (
    <div className="expense-item">
      <h2>Expense item!</h2>
      <div>May 22nd 2023</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">$222.54</div>
      </div>
    </div>
  );
}

export default ExpenseItem;