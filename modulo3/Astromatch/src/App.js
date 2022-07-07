import Home from "./components/home";
import Match from "./components/Match";
import './index.css'
import { useState } from "react";


function App() {

  const [tela , setTela] = useState("Home")

  const irParaHome = () => {
    setTela("Home")
     }

  const irParaMatch = () => {
        setTela("Match")
      }

  const TelaAtual = () => {
  
    switch(tela){

      case "Home":
        return <Home
           irParaMatch = {irParaMatch}
        />
        
      case"Match":
        return <Match
           irParaHome = {irParaHome}
        />

      default:
				return <div> Erro! Essa pagina não existe! </div>
    }
  

  }
  return (
    <div>
      
      {TelaAtual()}
 
    </div>
  );
}

export default App;
