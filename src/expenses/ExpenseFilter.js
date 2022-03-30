import './ExpenseFilter.css';

function ExpenseFilter(props) {
	const onSelectChange = (event) => {
		props.onSelectedFilter(event?.target?.value);
	};

   return (
		<div className='expenses-filter'>
			<div className='expenses-filter__control'>
				<label>Filter by Year</label>
				<select onChange={onSelectChange}>
					<option value="2022">2022</option>
					<option value="2021">2021</option>
					<option value="2020">2020</option>
					<option value="2019">2019</option>
				</select>
			</div>
		</div>
	);
}

export default ExpenseFilter;