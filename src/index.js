import React from 'react';
import ReactDOM from 'react-dom/client';
import Saludo from './components/Saludo'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Saludo nombre="Walther" edad={27} altura="1.70m"/>
    {/* 
        props: {
            nombre: "Walther",
            edad: 27,
            altura: "1.70m"
        }
    
    */}
  </React.StrictMode>
);
