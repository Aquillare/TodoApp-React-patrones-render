import React from 'react';

function TodoCounter(){
    return(
        <h2>Has completado 2 de 3 TODOs</h2>
    );
}

export {TodoCounter};

//cuando exportamos el componente entre llaves
//es para que al importarlo solo podamos hacerlo
//usando el nombre original del componente.

//si por ejemplo usaramos export default, podriamos
//luego importarlo nombrandolo de cualquier forma.