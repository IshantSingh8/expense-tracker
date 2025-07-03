import React from 'react';

function ExpenseList({ expenses }) {
    return ( <
        div className = "expense-list" >
        <
        h2 > Expenses < /h2> {
            expenses.length === 0 ? ( <
                p > No expenses yet < /p>
            ) : ( <
                ul > {
                    expenses.map((item, index) => ( <
                        li key = { index } >
                        <
                        span > { item.name } < /span> <
                        span > ₹{ item.amount } < /span> <
                        /li>
                    ))
                } <
                /ul>
            )
        } <
        /div>
    );
}

export default ExpenseList;