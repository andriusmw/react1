import logo from './logo.svg';
import './App.css';

function App() {



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
          <span>Linea 1</span>
          <span>Linea 2</span>
          <img src="" />
        </div>

    </div>
  );
}

export default App;
