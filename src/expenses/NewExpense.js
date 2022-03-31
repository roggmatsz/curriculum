import './NewExpense.css';
import { useState } from 'react';
import ExpenseForm from './ExpenseForm';

function NewExpense(props) {
	const [ isFormVisible, setIsFormVisible ] = useState(false);

	const onSavedExpenseHandler = (data) => {
		const savedExpenseData = {
			...data,
			id: Math.random().toString()
		};

		props.onNewExpense(savedExpenseData);
		setIsFormVisible(false);
	};

	const onCancelHandler = () => {
		setIsFormVisible(false);
	};

	const onNewExpenseHandler = () => {
		setIsFormVisible(true);
	};

	let body;
	if (!isFormVisible) {
		body = (
			<div className='new-expense__actions'>
				<button type="button" onClick={onNewExpenseHandler}>New Expense</button>
			</div>
		);
	} else {
		body = <ExpenseForm onSavedExpense={onSavedExpenseHandler} onCancel={onCancelHandler} />;
	}

	return (
		<div className="new-expense">
			{body}
		</div>
	);
}

export default NewExpense;