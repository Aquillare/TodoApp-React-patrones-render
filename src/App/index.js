
import React from 'react';
import {AppUI} from './AppUI';
import {TodoProvider} from '../TodoContext/index'
import './App.css';

function App() {

  

  return (
     <TodoProvider>
       <AppUI/>
     </TodoProvider>
  );
}

export default App;
