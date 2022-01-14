import React from 'react';
import plusIcon from '../assets/plus.png'
import './CreateTodoButton.css'
import {TodoContext} from '../TodoContext';

const CreateTodoButton = ({setOpenModal,openModal}) => {

    const {loading, searchedTodos} = React.useContext(TodoContext);

    const onClickButton = () => {
        /*!openModal ? setOpenModal(true) : setOpenModal(false); esta solucion es valida*/ 

        /*las funciones actualizadoras del estado nos permiten devolver en valor directamente
         como true , o false, pero tambien nos permiten devolver una funcion, esta funcion nos
         traera como argumento el estado acutual, asi podriamos trabjar con el y aplicar esta solucion*/

         setOpenModal(prevState => !prevState)   /*si prevState es tru lo devolvera false y viceversa*/


    }

    return(
        <div className='createButton_container'>
        <button className='CreateButton'
         onClick={onClickButton}>
            <img src={plusIcon} alt="plus Icon"/>
        </button>

        {(!loading && !searchedTodos.length) && <p className='info_create'>Crea el primer todo</p>} 
        </div>
    );
}

export {CreateTodoButton};