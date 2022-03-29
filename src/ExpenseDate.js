import './ExpenseDate.css';

function ExpenseDate(props) {
	const month = props.date.toLocaleDateString('en-US', { month: 'long' });
	const year = props.date.toLocaleDateString('en-US', { day: '2-digit' });
	const day = props.date.getFullYear();

	return (
		<div className='expense-date'>
			<span className='expense-date__month'>{month}</span>
			<span className='expense-date__year'>{year}</span>
			<span className='expense-date__day'>{day}</span>
		</div>
	);
}

export default ExpenseDate;