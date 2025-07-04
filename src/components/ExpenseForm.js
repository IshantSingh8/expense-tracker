import React, { useState } from 'react';

function ExpenseForm({ addExpense }) {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !amount || isNaN(amount)) return;

        addExpense({ name, amount: parseFloat(amount) });
        setName('');
        setAmount('');
    };

    return ( <
        form onSubmit = { handleSubmit } >
        <
        input type = "text"
        placeholder = "Expense name"
        value = { name }
        onChange = {
            (e) => setName(e.target.value)
        }
        /> <
        input type = "number"
        placeholder = "Amount ₹"
        value = { amount }
        onChange = {
            (e) => setAmount(e.target.value)
        }
        /> <
        button type = "submit" > Add Expense < /button> < /
        form >
    );
}

export default ExpenseForm;