import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const ExpenseChart = ({ expenses }) => {
  const data = expenses.reduce((acc, curr) => {
    const found = acc.find(item => item.name === curr.category);
    if (found) found.value += curr.amount;
    else acc.push({ name: curr.category, value: curr.amount });
    return acc;
  }, []);

  return (
    <PieChart width={400} height={400}>
      <Pie dataKey="value" data={data} cx="50%" cy="50%" outerRadius={100} label>
        {data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
      </Pie>
      <Tooltip />
    </PieChart>
  );
};

export default ExpenseChart;