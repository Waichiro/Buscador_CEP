import { FiSearch } from 'react-icons/fi'
import './style.css';

function App() {
  return (
    <div className="container">
        <h1 className='title'>Buscador CEP</h1>


        <div className="containerInput">
          <input 
            type="text" 
            placeholder="Digite seu CEP...">
          </input>

          <button className="buttonSearch">
            <FiSearch size={25} color="#FFF"/>
          </button>

        </div>

        <main className='main'>
            <h2>CEP: 1234567</h2>

            <span>Rua Teste</span>

            <span>Complemento: teste complemento</span>

            <span>Vila Rosa</span>

            <span>Campo Grande - BA</span>
          </main>
    </div>
  );
}

export default App;
