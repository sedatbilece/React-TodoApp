import React from 'react';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';


const TodoListView = () => {
	const todos = useSelector((state) => state.todos);

	return (
		<div><h3 style={{textAlign:'center'}} > List </h3>
		<hr></hr>
			<ul className='list-group'>
			{todos.map((todo) => (
				<TodoItem id={todo.id} title={todo.title} completed={todo.completed} />
			))}
		</ul>
		</div>
	);
};

export default TodoListView;