// src/components/AddBudgetForm.jsx
import React, { useState, useContext } from 'react';
import { BudgetContext } from '../context/BudgetContext';

const AddBudgetForm = () => {
    const { addBudget } = useContext(BudgetContext);

    const [inputs, setInputs] = useState({ title: '', amount: '' });
    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
    };

    const validateForm = () => {
        const newErrors = {};
        if (!inputs.title || inputs.title.trim() === '') {
            newErrors.title = 'Title is required';
        } else if (!/^[a-zA-Z]+$/.test(inputs.title)) {
            newErrors.title = 'Title can only contain letters';
        }
        if (!inputs.amount || inputs.amount.trim() === '') {
            newErrors.amount = 'Amount is required';
        } else if (!/^\d+$/.test(inputs.amount)) {
            newErrors.amount = 'Amount must be an integer';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            addBudget(inputs.title, inputs.amount);
            setInputs({ title: '', amount: '' });
            setErrors({});
        }
    };

    return (
        
        <div className='mt-4 p-4  border border-gray-300 rounded-lg shadow-md '>
            <form onSubmit={handleSubmit} className='flex flex-col  gap-2px '>
                <h2 className='font-bold mb-1'>Add Budget</h2>
                <label htmlFor="title">Title
                    <input
                        type="text"
                        placeholder='Title'
                        name='title'
                        value={inputs.title}
                        onChange={handleChange}
                        className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                    />
                </label>
                {errors.title && <p className=" text-red-600">{errors.title}</p>}
                <br />
                <label htmlFor="amount">Amount

                    <input
                        type="text"
                        placeholder='Amount'
                        name="amount"
                        value={inputs.amount}
                        onChange={handleChange}
                        className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                    />
                </label>
                {errors.amount && <p className=" text-red-600">{errors.amount}</p>}
                <br />
                <div className=' flex justify-start'>
                
            
        <button type='submit' className='w-20    bg-blue-600 text-white rounded-md hover:bg-pink  flex flex-row'>Submit</button>
        </div>
        </form>
        </div>
        
    );
};

export default AddBudgetForm;
