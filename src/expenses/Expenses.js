import './Expenses.css';
import { useState } from 'react';
import Card from '../Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpenseFilter';

function Expenses(props) {
	const [ selectedFilter, setSelectedFilter ] = useState('2020');
	const filteredExpenses = props.list.filter(expense => 
		expense?.date?.getFullYear().toString() === selectedFilter);

	let expensesContent = <p>No expenses found.</p>;
	if (filteredExpenses.length > 0) {
		expensesContent = filteredExpenses.map(expense => 
			<ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
		);
	}
	const onSelectedFilterHander = (value) => {
		setSelectedFilter(value);
	}; 
	
	return (
		<Card className='expenses'>
			<ExpensesFilter selected={selectedFilter} onSelectedFilter={onSelectedFilterHander} />
			{expensesContent}
		</Card>
	);
}

export default Expenses;