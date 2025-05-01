import { useEffect, useState } from 'react';
import axios from 'axios';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import ExpenseChart from './components/ExpenseChart';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [selected, setSelected] = useState(null);

  const fetchExpenses = async () => {
    const res = await axios.get('http://localhost:5000/expenses');
    setExpenses(res.data);
  };

  useEffect(() => { fetchExpenses(); }, []);

  const addOrUpdateExpense = async (expense) => {
    if (selected) {
      await axios.put(`http://localhost:5000/expenses/${selected._id}`, expense);
    } else {
      await axios.post('http://localhost:5000/expenses', expense);
    }
    setSelected(null);
    fetchExpenses();
  };

  const deleteExpense = async (id) => {
    await axios.delete(`http://localhost:5000/expenses/${id}`);
    fetchExpenses();
  };

  return (
    <div>
      <h1>Expense Tracker</h1>
      <ExpenseForm onSubmit={addOrUpdateExpense} selected={selected} />
      <ExpenseList expenses={expenses} onDelete={deleteExpense} onEdit={setSelected} />
      <ExpenseChart expenses={expenses} />
    </div>
  );
}

export default App;