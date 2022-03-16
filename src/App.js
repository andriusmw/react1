import React from 'react';
import { ReactDOM } from 'react';
import './App.css';
//Hay que importar useState from React
import {useState} from "react";
//useState se importa entre corchetes porque su libreria por defecto no es react, para importar algo en concreto de un sitio
//que no es el suyo por defecto se mete entre corchetes. Sino no compila

function App() {

const [linea1] = useState('Hola Mundo');
//esto se llama crear un estado, dentro del parentesis se le
//pasa valor pro defecto a useState(). 
//esta declarando dos constantes y les va a pasar los valores mediante el usetate.
//el primer valor a linea1 y el segundo a setlinea1

  return (
    <div className="App">
      <p>Select picker de memes</p>
      <select>
        <option value="fire"  >Casa en llamas</option>
        <option value="Futurama" >Futurama</option>
        <option value="History" >History Channel</option>
        <option value="Matrix" >Matrix</option>
        <option value="Philo">Philosophyraptor</option>
        <option value="Smart" >Smart Guy</option>

      </select>

      <p>Input text -Primera linea</p>

      <input type="text" placeholder="linea 1" />

      <p>Input text- Segunda linea</p>

      <input type="text"  placeholder="linea 2"/>

      <p>boton exportar</p>

      <button>Exportar</button>

        <div>
          <span>{linea1}</span> <br />
          <span>Linea 2</span>  <br />
          <img src="" alt='no image'></img>
        
        </div>

    </div>
  );
}

export default App;
