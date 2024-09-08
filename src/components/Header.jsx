
import React, { useContext } from 'react';
import { BudgetContext } from '../context/BudgetContext';

const Header = () => {
    const { totalAmount } = useContext(BudgetContext);

    return (
        <div className='p-2 m-0.5 h-14 flex justify-between items-center bg-gradient-to-r from-purple-500 to-pink-500'>
            <h1 className='text-white text-xl'>My Budget</h1>
            <span className='text-white text-xl'>Total ksh:{totalAmount}</span>
        </div>
    );
};

export default Header;
