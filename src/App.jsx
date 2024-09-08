import React from 'react';
import AddBudgetForm from './components/AddBudgetForm.jsx';
import BudgetList from './components/BudgetList.jsx';
import Header from './components/Header.jsx';
const App = () => {
  return (
    <div className='bg-white min-h-screen  flex items-center justify-center f flex-row  text-black'>
      <div className='bg-white w-full max-w-[500px] shadow-lg rounded-md ' >
        <h1 className='font-bold text-xl'>My Budget</h1>
<Header></Header>
<div className='flex flex-row gap-3'>
      <AddBudgetForm />
      
      <BudgetList />
      </div>
      </div>
    </div>
  );
};

export default App;
