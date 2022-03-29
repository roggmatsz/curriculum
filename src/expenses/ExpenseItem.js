import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../Card';

function ExpenseItem(props) {
	return (
		<Card className='expense-item'>
			<ExpenseDate date={props.date} />
			<div className='expense-item'>
				<div className='expense-item__description'>
					<h2>{ props.title }</h2>
					<span className='expense-item__price'>${ props.amount }</span>
				</div>
			</div>
		</Card>
	);
}

export default ExpenseItem;