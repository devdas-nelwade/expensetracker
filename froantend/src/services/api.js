import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/expenses' });

export const fetchExpenses = () => API.get('/');
export const addExpense = (expense) => API.post('/', expense);
export const updateExpense = (id, expense) => API.put(`/${id}`, expense);
export const deleteExpense = (id) => API.delete(`/${id}`);
