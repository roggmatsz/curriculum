import './ExpenseForm.css';
import { useState } from 'react';

function ExpenseForm(props) {
	const [ formState, setFormState ] = useState({
		title: '',
		amount: '',
		date: ''
	});

	const onTitleChange = (event) => {
		setFormState((previousState) => {
			return { ...previousState, title: event?.target?.value };
		});
	};

	const onAmountChange = (event) => {
		setFormState((previousState) => {
			return { ...previousState, amount: event?.target?.value };
		});
	}

	const onDatechange = (event) => {
		setFormState((previousState) => {
			return { ...previousState, date: event?.target?.value };
		});
	}

	return (
		<form>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input type="text" onChange={onTitleChange} />
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input onChange={onAmountChange} type="number" min="0.01" step="0.1" />
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input onChange={onDatechange} type="date" min="2019-01-01" max="2022-12-31" />
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
}

export default ExpenseForm;