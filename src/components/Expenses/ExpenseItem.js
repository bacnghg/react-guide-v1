import ExpenseDate from './ExpenseDate';
import ExpenseAmount from './ExpenseAmount';
import Card from '../UI/Card';
import './ExpenseItem.css'
import { useState } from 'react';
function ExpenseItem(props) { 
  // let title = props.title
  const [title, setTitle] = useState(props.title)

  const clickHandler = () => {
    setTitle("Updated Title")
    console.log(title)
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <ExpenseAmount amount={props.amount}/>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
