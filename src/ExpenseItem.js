import './ExpenseItem.css';

function ExpenseItem(props) {
	return (
		<div className='expense-item'>
			<span>{ props.date.toLocaleDateString() }</span>
			<div className='expense-item__description'>
				<h2>{ props.title }</h2>
				<span className='expense-item__price'>{ props.amount }</span>
			</div>
		</div>
	);
}

export default ExpenseItem;