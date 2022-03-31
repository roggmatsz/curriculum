import './Expenses.css';
import { useState } from 'react';
import Card from '../Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpenseFilter';

function Expenses(props) {
	const [ selectedFilter, setSelectedFilter ] = useState('2020');
	let filteredExpenses = props.list.filter(expense => 
		expense?.date?.getFullYear().toString() === selectedFilter);

	const onSelectedFilterHander = (value) => {
		setSelectedFilter(value);
	}; 
	
	return (
		<Card className='expenses'>
			<ExpensesFilter selected={selectedFilter} onSelectedFilter={onSelectedFilterHander} />
			{filteredExpenses.map(item =>
				<ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />
			)}
		</Card>
	);
}

export default Expenses;