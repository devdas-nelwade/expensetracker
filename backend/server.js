const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const expenseRoutes = require('./routes/expenseRoutes'); // Your router file

const app = express();

app.use(cors());
app.use(express.json()); // Required to parse JSON body
app.use('/api/expenses', expenseRoutes); // 👈 This defines your route prefix

mongoose.connect('mongodb://localhost:27017/expensetracker')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
