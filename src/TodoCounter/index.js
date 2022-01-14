import React from 'react';
import { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import './todoCounter.css'

function TodoCounter(){
    
    const {totalTodos, completedTodos} = useContext(TodoContext);

    
    return(
        <h2 className='todo_counter'>{`Has completado ${completedTodos} de ${totalTodos} TODOs`}</h2>
    );
}

export {TodoCounter};

//cuando exportamos el componente entre llaves
//es para que al importarlo solo podamos hacerlo
//usando el nombre original del componente.

//si por ejemplo usaramos export default, podriamos
//luego importarlo nombrandolo de cualquier forma.