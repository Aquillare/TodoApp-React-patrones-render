import React from 'react';
import './todoList.css';

const TodoList = (props) => {
    return(
        <section className='todo_list'>
            <ul className='todo_list-ul'>
                {props.children}
            </ul>
        </section>
        
    );
};

export {TodoList};