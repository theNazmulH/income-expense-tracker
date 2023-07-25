import React, { useState } from 'react';

const ExpensesPage = ({ transactions, addTransaction }) => {

    const [expenseAmount, setExpenseAmount] = useState('');

    const handleAddExpense = (e) => {
        e.preventDefault();
        if (expenseAmount !== '') {
            const newExpense = { type: 'expense', amount: parseFloat(expenseAmount) };
            addTransaction(newExpense);
            setExpenseAmount('');
        }
    };

    const totalExpenses = transactions
        .filter((transaction) => transaction.type === 'expense')
        .reduce((total, transaction) => total + transaction.amount, 0);

    return (
        <div>
            <h2>Expenses Page</h2>
            <form onSubmit={handleAddExpense}>
                <label>Expense Amount:</label>
                <input
                    type="number"
                    value={expenseAmount}
                    onChange={(e) => setExpenseAmount(e.target.value)}
                />
                <button type="submit">Add Expense</button>
            </form>
            <h3 className='history'>Expenses History</h3>
            <ul className='trackerList'>
                {transactions.map((transaction, index) => (
                    transaction.type === 'expense' && (
                        <li key={index}>
                            - ${transaction.amount}
                        </li>
                    )
                ))}
            </ul>
            <h3>Total Expenses: ${totalExpenses}</h3>
        </div>
    );
};

export default ExpensesPage;
