import './ExpenseItem.css';

function ExpenseItem(props) {
	const month = props.date.toLocaleDateString('en-US', { month: 'long' });
	const year = props.date.toLocaleDateString('en-US', { day: '2-digit' });
	const day = props.date.getFullYear();

	return (
		<div className='expense-item'>
			<div>
				<span>{month}</span>
				<span>{year}</span>
				<span>{day}</span>
			</div>
			<div className='expense-item__description'>
				<h2>{ props.title }</h2>
				<span className='expense-item__price'>${ props.amount }</span>
			</div>
		</div>
	);
}

export default ExpenseItem;