import './Expenses.css';
import { useState } from 'react';
import Card from '../Card';
import ExpensesFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
	const [ selectedFilter, setSelectedFilter ] = useState('2020');
	const filteredExpenses = props.list.filter(expense => 
		expense?.date?.getFullYear().toString() === selectedFilter);

	const onSelectedFilterHander = (value) => {
		setSelectedFilter(value);
	}; 
	
	return (
		<Card className='expenses'>
			<ExpensesFilter selected={selectedFilter} onSelectedFilter={onSelectedFilterHander} />
			<ExpensesChart expenses={filteredExpenses} />
			<ExpensesList items={filteredExpenses} />
		</Card>
	);
}

export default Expenses;