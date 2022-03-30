import { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../Card';

import './ExpenseItem.css';

function ExpenseItem(props) {
	const [title, setTitle] = useState(props.title);
 
	const onButtonClick = () => {
		setTitle('New Title Here');
		console.log(title);
	}

	return (
		<Card className='expense-item'>
			<ExpenseDate date={props.date} />
			<div className='expense-item'>
				<div className='expense-item__description'>
					<h2>{ title }</h2>
					<span className='expense-item__price'>${ props.amount }</span>
				</div>
			</div>
			<button onClick={onButtonClick}>Change Title</button>
		</Card>
	);
}

export default ExpenseItem;