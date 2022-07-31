import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleComplete, deleteTodo } from './store/todoSlice';
import './App.css';

const ToDoItem = ({ id, title, completed }) => {
    const dispatch = useDispatch();

    const handleCheckboxClick = () => {
        dispatch(toggleComplete({ id, completed: !completed }));
    };

    const handleDeleteClick = () => {
        dispatch(deleteTodo({ id }));
    };
    return (
        <li className={completed===true ?'comp':''}>
            <div  onClick={handleCheckboxClick} className='todoitem'>
                    {title}
               
                <button className='item btn' onClick={handleDeleteClick} >X</button>
            </div>
        </li>
    );
};

export default ToDoItem;