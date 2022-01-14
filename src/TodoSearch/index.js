import React from 'react';
import './TodoSearch.css';
import {useContext}  from 'react';
import { TodoContext } from '../TodoContext';

const TodoSearch = () => {

    const {searchValue, setSearchValue} = useContext(TodoContext);

    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    }

    return(
        
        <input className='search'
        placeholder='Filtra un Todo'
        value={searchValue}
        onChange={onSearchValueChange}
        />
        
    )   
}

export { TodoSearch};