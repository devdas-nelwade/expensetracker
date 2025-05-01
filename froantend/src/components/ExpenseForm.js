import { useState, useEffect } from 'react';

const ExpenseForm = ({ onSubmit, selected }) => {
  const [form, setForm] = useState({ amount: '', category: '', description: '', date: '' });

  useEffect(() => {
    if (selected) setForm(selected);
  }, [selected]);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(form);
    setForm({ amount: '', category: '', description: '', date: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="amount" placeholder="Amount" value={form.amount} onChange={handleChange} required />
      <input name="category" placeholder="Category" value={form.category} onChange={handleChange} required />
      <input name="description" placeholder="Description" value={form.description} onChange={handleChange} />
      <input name="date" type="date" value={form.date} onChange={handleChange} required />
      <button type="submit">{selected ? 'Update' : 'Add'} Expense</button>
    </form>
  );
};

export default ExpenseForm;