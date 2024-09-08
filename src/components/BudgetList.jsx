import React, { useContext } from 'react';
import { BudgetContext } from '../context/BudgetContext';
import { FaTrash } from 'react-icons/fa'; 

const BudgetList = () => {
    const { budgets, deleteBudget } = useContext(BudgetContext);

    return (
        <div className="flex justify-center">
            <div className="mt-4 p-6 h-90 border border-gray-300 rounded-lg shadow-md w-full max-w-2xl">
                <h2 className=" font-bold mb-1">Budget List</h2>

                {budgets.length > 0 ? (
                    <table className="table-auto w-full text-left">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-4 py-2 font-semibold">Title</th>
                                <th className="px-4 py-2 font-semibold">Amount</th>
                                <th className="px-4 py-2 font-semibold"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {budgets.map((budget, index) => (
                                <tr key={index} className="border-t">
                                    <td className="px-4 py-2">{budget.title}</td>
                                    <td className="px-4 py-2">{budget.amount}</td>
                                    <td className="px-4 py-2">
                                        <button 
                                            
                                            onClick={() => deleteBudget(index)}
                                        >
                                            <FaTrash />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className="text-gray-500">No budgets added yet.</p>
                )}
            </div>
        </div>
    );
};

export default BudgetList;
