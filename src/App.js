import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';
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

  return (
    <div>
      <h2>Let's Go React</h2>
      <ExpenseItem 
      title={expenses[0].title}
      amount={expenses[0].amount}
      date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem 
      title={expenses[1].title}
      amount={expenses[1].amount}
      date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem 
      title={expenses[2].title}
      amount={expenses[2].amount}
      date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem 
      title={expenses[3].title}
      amount={expenses[3].amount}
      date={expenses[3].date}
      ></ExpenseItem>
      <ExpenseItem 
      title={expenses[4].title}
      amount={expenses[4].amount}
      date={expenses[4].date}
      ></ExpenseItem>
      <ExpenseItem 
      title={expenses[5].title}
      amount={expenses[5].amount}
      date={expenses[5].date}
      ></ExpenseItem>
      <ExpenseItem 
      title={expenses[6].title}
      amount={expenses[6].amount}
      date={expenses[6].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
