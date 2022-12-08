import React from 'react';
import './todoItem.css';
import checkIcon from '../assets/check.png';
import deleteIcon from '../assets/remove.png';
import editIcon from '../assets/pencilEditTodo.png'

const TodoItem = (props) => {

    const {completed, onComplete, onDelete, onOpenModal} = props;


    return(
        <li className='todo_item-li'>
            
            <button  type='button' className='todo_action_button'>
                <span className={(completed && 'todo_check') || (`${!completed  && 'todo_checkOff' }` )}
                onClick={onComplete}>
                    <img src={checkIcon} alt="check Icon"/>
                </span>
            </button>
            

            <p className={(!completed && 'todo_item-text') || (`${completed && 'todo_item-text2' }`)}>{props.text}</p>

            <div className='todo_buttons_container'>

                <button type='button' className='todo_action_button'>
                    <span className='todo_delete_span'
                    onClick={onDelete}>
                        <img src={deleteIcon} alt="delete Icon"/>
                    </span>
                </button>

                <button type='button' className='todo_action_button'>
                    <span className='todo_edit'
                    onClick={onOpenModal}>
                        <img src={editIcon} alt="edit Icon"/>
                    </span>
                </button>

               
            </div>
            
        </li>
    );
}

export { TodoItem };