import React from 'react';
import Balance from './Balance';

const Home = (props) => {

    return (
        <div>
            {/* Balance */}
            <Balance transactions={props.transactions} />
            <h3 className='history'>
                {props.transactions.length > 0 ? "History" : "You don't have any incomes or expenses right now. Add some from Income/Expenses page"}</h3>
            <ul className='trackerList'>
                {props.transactions.map((transaction, index) => (
                    <li key={index}>
                        ${transaction.amount}  <span className={transaction.type}>{transaction.type}</span>
                    </li>

                ))}
            </ul>
        </div>
    )
}

export default Home