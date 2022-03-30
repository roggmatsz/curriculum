import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

function NewExpense(props) {
	const onSavedExpenseHandler = (data) => {
		const savedExpenseData = {
			...data,
			id: Math.random().toString()
		};

		props.onNewExpense(savedExpenseData);
	};

	return (
		<div className="new-expense">
			<ExpenseForm  onSavedExpense={onSavedExpenseHandler} />
		</div>
	);
}

export default NewExpense;