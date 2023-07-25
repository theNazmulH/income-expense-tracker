import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ExpensesPage from './components/ExpensesPage';
import Header from './components/Header';
import Home from './components/Home';
import IncomePage from './components/IncomePage';

const App = () => {
  const [transactions, setTransactions] = useState([]);

  // Function to add a new transaction
  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home transactions={transactions} addTransaction={addTransaction} />} />
            <Route path="/income" element={<IncomePage transactions={transactions} addTransaction={addTransaction} />} />
            <Route path="/expenses" element={<ExpensesPage transactions={transactions} addTransaction={addTransaction} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
