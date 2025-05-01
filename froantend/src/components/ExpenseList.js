const ExpenseList = ({ expenses, onDelete, onEdit }) => (
    <ul>
      {expenses.map(exp => (
        <li key={exp._id}>
          {exp.amount} - {exp.category} - {exp.description} - {new Date(exp.date).toLocaleDateString()}
          <button onClick={() => onEdit(exp)}>Edit</button>
          <button onClick={() => onDelete(exp._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
  
  export default ExpenseList;