import logo from './logo.svg';
import './App.css';
import Home from './components/home/index'
import Pages from './components/pages/index'


function App() {


  return (
    <div className="App">
        <h1> Funcionando 1 </h1>
        <div><button> Trocar de Tela </button></div>
        
        <div className='lista'>
          <li>teste <span className='botao-x'>X</span></li>
        </div>
        <hr></hr>
        <Home></Home>
        <Pages></Pages>
    </div>
  );
}

export default App;
