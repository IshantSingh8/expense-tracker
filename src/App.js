import React, { useState } from 'react';
import './App.css';
import BudgetForm from './components/BudgetForm';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

function App() {
    const [budget, setBudget] = useState(0);
    const [expenses, setExpenses] = useState([]);

    const handleAddExpense = (expense) => {
        setExpenses([...expenses, expense]);
    };

    const totalExpenses = expenses.reduce((total, item) => total + parseFloat(item.amount), 0);
    const balance = budget - totalExpenses;

    return ( <
        div className = "App" >
        <
        h1 > 💰Monthly Expense Tracker < /h1>

        <
        BudgetForm setBudget = { setBudget }
        />

        <
        div className = { `balance ${balance < 0 ? 'negative' : 'positive'}` } >
        <
        h3 > Budget: ₹{ budget } < /h3> <
        h3 > Total Spent: ₹{ totalExpenses } < /h3> <
        h3 > Balance: ₹{ balance } < /h3> <
        /div>

        <
        ExpenseForm addExpense = { handleAddExpense }
        /> <
        ExpenseList expenses = { expenses }
        /> <
        /div>
    );
}

export default App;