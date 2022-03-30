import './Expenses.css';
import { useState } from 'react';
import Card from '../Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpenseFilter';

function Expenses(props) {
	const [ selectedFilter, setSelectedFilter ] = useState('');
	const items = props.list;

	const onSelectedFilterHander = (value) => {
		setSelectedFilter(value);
		console.log(value);
	}; 
	
	return (
		<div>
			<ExpensesFilter onSelectedFilter={onSelectedFilterHander} />
			<Card className='expenses'>
				<ExpenseItem title={items[0].title} amount={items[0].amount} date={items[0].date} />
				<ExpenseItem title={items[1].title} amount={items[1].amount} date={items[1].date}/>
				<ExpenseItem title={items[2].title} amount={items[2].amount} date={items[2].date} />
				<ExpenseItem title={items[3].title} amount={items[3].amount} date={items[3].date}/>
			</Card>
		</div>
	);
}

export default Expenses;