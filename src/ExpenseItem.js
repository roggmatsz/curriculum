import './ExpenseItem.css';

function ExpenseItem() {
	return (
		<div className='expense-item'>
			<span>Date Here</span>
			<div className='expense-item__description'>
				<h2>Title</h2>
				<span className='expense-item__price'>Amount Here</span>
			</div>
		</div>
	);
}

export default ExpenseItem;