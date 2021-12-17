// import logo from './logo.svg';
import React from 'react';
import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoSearch } from './TodoSearch';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoList } from './TodoList';


const todos = [
  {text: 'Cortar cebolla', completed: false},
  {text: 'Tomar el curso de intro React', completed:false},
  {text: 'Llorar con la llorona', completed:false},
];

function App() {
  return (
    //React.Frgament es una etiqueta invisible que nos servira para que se
    //puedan renderizar nuestro componentes, tambien podemos usar simplemente
    //<></> en su lugar.

    //este fragment lo usamos porque react para sus calculos internos necesita
    //que solo enviemos una etiquta por componente. es invisible porque no afecta
    //la interfaz de nuestra app.

    <React.Fragment>

        <TodoCounter/>
        
        <TodoSearch />
        
        <TodoList>
          {todos.map(todo => (
            <TodoItem text={todo.text} key={todo.text}/>
          ))}          
        </TodoList>

        <CreateTodoButton/>
        

    </React.Fragment>
  );
}

export default App;
