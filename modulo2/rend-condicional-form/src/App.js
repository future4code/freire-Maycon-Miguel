import React from "react";
import './App.css';
import Etapa1 from './components/etapa1';
import Etapa2 from './components/etapa2';
import Etapa3 from './components/etapa3';
import Final from './components/final';

export default class App extends React.Component {

  state = {
    pagina: ""
  };

  mudarDePagina = () => {
    this.setState({ pagina: "etapa1" });
  };

  reder (){

    let secao;
      switch (this.state.pagina) {
        case "etapa1":
          secao = <Etapa1/>;
          break;
        case "Etapa2":
          secao = <Etapa2/>;
          break;
        case "Etapa3":
          secao = <Etapa3/>;
          break;
        case "final":
          secao = <Final/>;
          break;
        default:
          secao = <p>Nenhuma seção selecionada</p>;

      
    } return (
    <div>
      <h2>Página Home</h2>
      <button onClick={this.mudarDePagina}> Próxima Etapa</button>
      <p>{secao}</p>
    </div>)
}
}

