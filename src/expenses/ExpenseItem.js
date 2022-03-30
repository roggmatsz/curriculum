import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../Card';

function ExpenseItem(props) {
	const onButtonClick = () => {
		console.log('clickeddddd');
	}

	return (
		<Card className='expense-item'>
			<ExpenseDate date={props.date} />
			<div className='expense-item'>
				<div className='expense-item__description'>
					<h2>{ props.title }</h2>
					<span className='expense-item__price'>${ props.amount }</span>
				</div>
			</div>
			<button onClick={onButtonClick}>Change Title</button>
		</Card>
	);
}

export default ExpenseItem;