import React from 'react';

const Balance = ({ transactions }) => {
    const totalIncome = transactions
        .filter((transaction) => transaction.type === 'income')
        .reduce((total, transaction) => total + transaction.amount, 0);

    const totalExpenses = transactions
        .filter((transaction) => transaction.type === 'expense')
        .reduce((total, transaction) => total + transaction.amount, 0);

    const balance = totalIncome - totalExpenses;

    return (
        <div className="balance">
            <div>
                <div className="in-ex-area">
                    <div className="in-ex">
                        <div>Total Income: <span className="green">${totalIncome}</span></div>
                        <div>Total Expenses: <span className="red">${totalExpenses}</span></div>
                    </div>
                    <div className="total-bal">
                        <div>Balance: <span className="green">{balance >= 0 ? `$${balance.toFixed(2)}` : `-$${Math.abs(balance).toFixed(2)}`}</span></div>
                        {/* <Link to="/add">Add Transaction</Link> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Balance;
