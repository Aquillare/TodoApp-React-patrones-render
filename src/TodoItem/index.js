import React from 'react';
import './todoItem.css';
import checkIcon from '../assets/check.png';
import deleteIcon from '../assets/remove.png';

const TodoItem = (props) => {

    const {completed, onComplete, onDelete} = props;


    return(
        <li className='todo_item-li'>
            <span className={(completed && 'todo_check') || (`${!completed  && 'todo_checkOff' }` )}
            onClick={onComplete}>
                <img src={checkIcon} alt="check Icon"/>
            </span>

            <p className={(!completed && 'todo_item-text') || (`${completed && 'todo_item-text2' }`)}>{props.text}</p>

            <span className='todo_delete'
            onClick={onDelete}>
                <img src={deleteIcon} alt="delete Icon"/>
            </span>
        </li>
    );
}

export { TodoItem };