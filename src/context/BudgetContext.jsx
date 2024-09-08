// src/context/BudgetContext.jsx
import React, { createContext, useState, useEffect } from 'react';

const BudgetContext = createContext();

const BudgetProvider = ({ children }) => {
    const [budgets, setBudgets] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    const addBudget = (title, amount) => {
        setBudgets((prevBudgets) => [...prevBudgets, { title, amount: parseInt(amount, 10) }]);
    };

    const deleteBudget = (index) => {
        setBudgets((prevBudgets) => prevBudgets.filter((_, i) => i !== index));
    };

    // Calculate the total amount whenever the budgets array changes
    useEffect(() => {
        const total = budgets.reduce((acc, budget) => acc + budget.amount, 0);
        setTotalAmount(total);
    }, [budgets]);

    return (
        <BudgetContext.Provider value={{ budgets, addBudget, deleteBudget, totalAmount }}>
            {children}
        </BudgetContext.Provider>
    );
};

export { BudgetContext, BudgetProvider };


