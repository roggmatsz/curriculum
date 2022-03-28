import './ExpenseItem.css';

function ExpenseItem() {
	const date = new Date();
	const someTitle = 'tiiiiittle here';

	return (
		<div className='expense-item'>
			<span>{ date.toISOString() }</span>
			<div className='expense-item__description'>
				<h2>{ someTitle }</h2>
				<span className='expense-item__price'>{ Math.random() }</span>
			</div>
		</div>
	);
}

export default ExpenseItem;