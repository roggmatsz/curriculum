import './Expenses.css';
import { useState } from 'react';
import Card from '../Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpenseFilter';

function Expenses(props) {
	const [ selectedFilter, setSelectedFilter ] = useState('2020');
	const items = props.list;

	const onSelectedFilterHander = (value) => {
		setSelectedFilter(value);
		console.log(value);
	}; 
	
	return (
		<Card className='expenses'>
			{props.list.map(item =>
				<ExpenseItem title={item.title} amount={item.amount} date={item.date} />
			)}
		</Card>
	);
}

export default Expenses;