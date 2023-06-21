
import React from 'react';
import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/Expenses/ExpenseItem';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
function App() {

  const expenses = [
    {
      id: '1',
      title: 'Toilet Paper',
      amount: 94.21,
      date: new Date(2025, 7, 13)
    },
    {
      id: '2',
      title: 'Candy Crush',
      amount: 94.21,
      date: new Date(2025, 8, 13)
    },
    {
      id: '3',
      title: 'Apple tivi',
      amount: 94.21,
      date: new Date(2022, 5, 13)
    },
    {
      id: '4',
      title: 'Car Insurance',
      amount: 494.21,
      date: new Date(2025, 7, 13)
    },
    {
      id: '5',
      title: 'Smart Watch',
      amount: 394.21,
      date: new Date(2022, 3, 10)
    },
    {
      id: '6',
      title: 'Ipad 10',
      amount: 594.21,
      date: new Date(2022, 3, 20)
    },
    {
      id: '7',
      title: 'Iphone 14 promax',
      amount: 1094.21,
      date: new Date(2022, 5, 8)
    },
  ]

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's great started!"),
  //   React.createElement(Expenses, {items: expenses})
  // )

  return (
    <div>
      <NewExpense />
     <Expenses items = {expenses} />
    </div>
  );
}

export default App;
