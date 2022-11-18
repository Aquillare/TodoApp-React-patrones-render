import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

const TodoForm = () => {

    const {addTodo,setOpenModal, openModal, editTodo} = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState(openModal.todo?.text);     

    const onChange = (event) =>{
        setNewTodoValue(event.target.value); 
    }

    const onCancel = () =>{
        setOpenModal(false);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        //si openModal.todo != undefined entonces el modal ha sido abierto para actualizar un todo.
        if(openModal.todo !== undefined){
            editTodo(openModal.todo.id, newTodoValue);
        }else{
            addTodo(newTodoValue);
        }
        setOpenModal(false);
    }

    return(
        <form onSubmit={onSubmit} className='todoForm '>
            <label className='form_label'>
                {openModal.todo !== undefined ? 'Actualiza el todo' : 'Crea un Todo'}
            </label>
            {/*Para nuestro formulario podriamos usar un input, pero en su lugar usaremos
              la etiqueta textarea, esto debido a que la etiqueta textarea nos permite
              tener un campo de entrada de texto mas amplio, asi como modificar sus propiedades
              para que se adapte al tamañano del texto, caso contrario a la etiqueta input, la
              cual desplaza el texto solo de manera horizontal*/}
            <textarea className='form_textArea'
                //placeholder='Escribe tu tarea a realizar'
                //placeholder={openModal.todo?.text || 'Escribe una tarea'}
                value={newTodoValue}
                onChange={onChange}
                >

            </textarea>
            <div className='form_buttonContainer'>
                <button 
                  type='button'
                  onClick={onCancel}
                  className='cancelButton'
                >
                    CANCELAR
                </button>
                <button type='submit' className='addButon'>
                    {openModal.todo !== undefined ? 'Actualizar' : 'Agregar'}
                </button>
            </div>
        </form>
    )
}

export { TodoForm }