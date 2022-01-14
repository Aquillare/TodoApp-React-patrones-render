import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoItem } from '../TodoItem';
import { TodoSearch } from '../TodoSearch';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoList } from '../TodoList';
import { TodoContext } from '../TodoContext';
import { useContext } from 'react';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { Footer } from '../Footer';
import Journal512Green  from '../assets/journal512Green.png';
import Busqueda512 from '../assets/busqueda512.png';

const AppUI = () => {
 
    const {
           error,
           loading,
           searchedTodos,
           toggleCompleteTodo,
           deleteTodo,
           setOpenModal,
           openModal,
           searchValue
          } = useContext(TodoContext);

    return(
        //React.Frgament es una etiqueta invisible que nos servira para que se
    //puedan renderizar nuestro componentes, tambien podemos usar simplemente
    //<></> en su lugar.

    //este fragment lo usamos porque react para sus calculos internos necesita
    //que solo enviemos una etiquta por componente. es invisible porque no afecta
    //la interfaz de nuestra app.

    <section className='container_todos'>
    <section className='container_head'>
      <div className='container_title'>
        <h2>T O D O</h2>
      </div>

      <TodoCounter/>
      <TodoSearch/>

    </section>
        
            <TodoList>
              {error && <p className='todo_item-li'>Ah ocurrido un error...</p> }
              {loading && <p className='loading_skeleton'></p>}
              {(!loading && !searchedTodos.length && searchValue.length < 1) && 
                <div className='todoCreate_container'>
                  <h2>Crea tu primer Todo</h2>
                  <img src={Journal512Green}/>
                </div>
              }
              {(!loading && !searchedTodos.length && searchValue.length > 1) && 
                <div className='todoSearch_noEncontrado'>
                  <h2>No encontramos el Todo</h2>
                  <img src={Busqueda512}/>
                </div>
              }

              {searchedTodos.map(todo => (
                <TodoItem 
                  text={todo.text}
                  completed={todo.completed}
                  key={todo.text}
                  onComplete={ () => toggleCompleteTodo(todo.text)}
                  onDelete={() => deleteTodo(todo.text)}
                />
              ))} 

            </TodoList>
      
    
            {!!openModal && (    //si openModal es true, renderiza el Componente Modal
              <Modal>
              {/*searchedTodos[0]?.text*/ <TodoForm/>}  {/*prguntamos si existe el array searchedTodos antes de usar su propiedad text*/}
              </Modal>    
             )
            }

      <CreateTodoButton setOpenModal={setOpenModal} openModal={openModal}/>
      
      <Footer/>
     </section>
  
    );
}

export {AppUI};