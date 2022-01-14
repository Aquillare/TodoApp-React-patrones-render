
import { useState, useEffect } from 'react';


const useLocalStorage = (itemName, initialValue) =>{
  
  const [error,setError] = useState(false);
  //Loading es un valor que creamos para simular que local storage es un api
  const [loading, setLoading] = useState(true);

  const [item, setItem] = useState(initialValue);

   //Usaremos UseEffect con un setTimeOut para simular que estamos trayendo datos de un API

    useEffect(() => {

      
      setTimeout( () => {
        try{
        
          const localStorageItem = localStorage.getItem(itemName);
  
          let parsedItem;
        
          if(!localStorageItem){
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue; 
          }else{
            parsedItem = JSON.parse(localStorageItem);
          }
          
          setItem(parsedItem);
          setLoading(false);
  
        }catch(err){
          console.error(err);
          setError(true);
        }
        
        
      }, 1000)
    });


    
    

    const saveItem =  (newItem) =>{
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        setItem(newItem)
    }


    //por convencion cuando un customHook devuelve mas de dos elementos, es recomendable
    //usar un objeto en vez de un array para retornarlos.

    return {
      item,
      saveItem,
      loading,
      error
    };
}

export {useLocalStorage};