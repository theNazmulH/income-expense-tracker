import React, { useState } from 'react';

const IncomePage = ({ transactions, addTransaction }) => {
    const [incomeAmount, setIncomeAmount] = useState('');

    const handleAddIncome = (e) => {
        e.preventDefault();
        if (incomeAmount !== '') {
            const newIncome = { type: 'income', amount: parseFloat(incomeAmount) };
            addTransaction(newIncome);
            setIncomeAmount('');
        }
    };

    const totalIncome = transactions
        .filter((transaction) => transaction.type === 'income')
        .reduce((total, transaction) => total + transaction.amount, 0);

    return (
        <div>
            <h2>Income Page</h2>
            <form onSubmit={handleAddIncome}>
                <label>Income Amount:</label>
                <input
                    type="number"
                    value={incomeAmount}
                    onChange={(e) => setIncomeAmount(e.target.value)}
                />
                <button type="submit">Add Income</button>
            </form>
            <h3 className='history'>Income History</h3>
            <ul className='trackerList'>
                {transactions.map((transaction, index) => (
                    transaction.type === 'income' && (
                        <li key={index}>
                            + ${transaction.amount}
                        </li>
                    )
                ))}
            </ul>
            <h3>Total Income: ${totalIncome}</h3>
        </div>
    );
};

export default IncomePage;
