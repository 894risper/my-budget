import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { BudgetProvider } from './context/BudgetContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  
    <BudgetProvider>
      <App />
    </BudgetProvider>
  </StrictMode>,
);
