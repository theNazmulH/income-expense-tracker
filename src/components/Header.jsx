import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>
                <Link to="/">Expenses and Income Tracker</Link>
            </h1>
            <nav>
                <ul>
                    <li><NavLink to="/">Overview</NavLink></li>
                    <li><NavLink to="/income">Income</NavLink></li>
                    <li><NavLink to="/expenses">Expenses</NavLink></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
