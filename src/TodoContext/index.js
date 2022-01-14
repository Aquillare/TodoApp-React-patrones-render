import React from 'react';
import {useState} from 'react';
import {useLocalStorage} from '../useLocalStorage/index';
import {createContext} from 'react';


const TodoContext = createContext();
/* use context trae un objeto con dos propiedades
    provider y consumer, por lo cual tambien podriamos verlo
    asi , const {provider , consumer} = React.useContext(); */

function TodoProvider(props){

    const {item :todos,  //de esta manera renombramos los valores traidos desde el customHook useLocalStorage.
        saveItem,
        loading,
        error
       } = (useLocalStorage('TODOS_V1', []));
   
     const [searchValue,setSearchValue] = useState('');
   
     const completedTodos = todos.filter( todo => !!todo.completed).length //!!todo.completed es lo mismo que todo.completed == true. almacenara la cantidad de todos completados
     const totalTodos = todos.length;

     const [openModal,setOpenModal] = useState(false);
   
     let searchedTodos = [];
   
     //creamos una condicional que evaluara la cantidad de letras introducidas
     //en el input de busqueda (searchValue), si es menor que 1, searchedTodos
     //sera igual a todos los todos, si es mayor que 1, convertira a minusculas
     //el texto de los todos y del string ingresado en searchValue para mediante
     //el metodo includes,almacenar en searchedTodos los todos que coincidan con
     //el string ingresado en searchValue.
   
     if(!searchValue >= 1){
        searchedTodos = todos;
     }else{
       searchedTodos = todos.filter(todo => {
         const todoText = todo.text.toLowerCase();
         const searchText = searchValue.toLowerCase();
         return todoText.includes(searchText);
       })
     }
    
     //con la funcion expresia completeTodos evaluaremos
     //mediante el metodo find index que e texto que enviamos como argumento
     //conincida con el text de alguno de los todos, al conicidir nos retornara
     //el indice (en el array) de este todo.
   
     const toggleCompleteTodo = (text) => {
       const todoIndex = todos.findIndex( todo => todo.text === text);
   
       //no debemos modificar el estado original de manera directa en pro del correcto funcionamiento de react,
       //por lo que creamos un nuea variable que contenga a todos los todos, luego a traves de ella modificaremos
       //el todo y con el metodo setTodos establecemos este nuevo valor que contiene a los todos en el estado.
       const newTodos = [...todos];
   
       if(newTodos[todoIndex].completed === false){
         newTodos[todoIndex].completed = true;
       }else{
         newTodos[todoIndex].completed = false;
       }
       saveItem(newTodos);
     }


     const addTodo = (text) =>{
       const newTodos = [...todos];
       newTodos.push({
         completed : false,
         text : text
       });
       saveItem(newTodos);
     }
   
     const deleteTodo = (text) => {
       const todoIndex = todos.findIndex( todo => todo.text === text);
       const newTodos = [...todos];
   
       //con el metodo splice podemos eliminar elementos de un array.
       //splice recibe dos argumentos, el indicie del elemento desde el
       //cual queremos empezar a eliminar y la cantidad de elementos a eliminar a partir de ahi. 
   
       newTodos.splice(todoIndex, 1);
       saveItem(newTodos);
     }
   

    return(
        <TodoContext.Provider value={{
            error,
            loading,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            toggleCompleteTodo,
            deleteTodo,
            searchedTodos,
            openModal,
            setOpenModal,
            addTodo,
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export {TodoContext,TodoProvider}