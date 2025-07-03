import React, { useState } from 'react';

function BudgetForm({ setBudget }) {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const value = parseFloat(input);
        if (!input || isNaN(value) || value < 0) return;
        setBudget(value);
        setInput('');
    };

    return ( <
        form onSubmit = { handleSubmit } >
        <
        input type = "number"
        placeholder = "Enter monthly income ₹"
        value = { input }
        onChange = {
            (e) => setInput(e.target.value)
        }
        /> <
        button type = "submit" > Set Budget < /button> < /
        form >
    );
}

export default BudgetForm;