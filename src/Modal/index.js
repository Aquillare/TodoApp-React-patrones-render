import React from 'react';
import  ReactDOM from 'react-dom';
import './modal.css';


function Modal({children}) {


    return ReactDOM.createPortal(
        <section className='modalBackground'>
             {children}
        </section>      
        ,
            document.getElementById('modal')
        )
        
 
};

export {Modal};