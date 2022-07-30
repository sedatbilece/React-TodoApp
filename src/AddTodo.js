import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './store/todoSlice';


const AddToDo = () => {
	const [value, setValue] = useState('');
	const dispatch = useDispatch();

	const onSubmit = (event) => {
		event.preventDefault();
		if (value) {
			dispatch(
				addTodo({
					title: value,
				})
			);
			setValue('')
		}
	};

	return (
		<form onSubmit={onSubmit} >
			<input
				type='text'
				className='form-control mb-2 mr-sm-2'
				value={value}
				onChange={(event) => setValue(event.target.value)}>
			</input>

			<button type='submit'>
				Add
			</button>
		</form>
	);
};

export default AddToDo;

