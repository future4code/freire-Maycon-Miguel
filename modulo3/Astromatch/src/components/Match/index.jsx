import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Voltar from './img/voltar.png'

const MenuMatch = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .button-Voltar{
    position: absolute;
    filter: contrast(0.9);
    background: none;
    border: none;
    cursor: pointer;

    margin-top: -645px;
    margin-left: 340px;
  }

  .button-Voltar:hover {

    transform: scale(1.2);
  }
  

  .menuPrincipal{
  
  background-color: whitesmoke;
  width: 420px;
  height: 720px;


  border-radius: 20px;
  box-shadow: 0 0 8px 0 black;

}

.titulo1 {

margin-top: 20px;
margin-bottom: 10px;
display: flex;
justify-content: center;
align-items: center;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
font-size: 25px;
color: #00dd88de;
}

.titulo2 {

font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
font-size: 25px;
color: #4d0364bd;
text-align: center;
}

`
function Match(props) {

    const [data, setData] = useState([])

    useEffect( () => {
    axios
    .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/maycon/matches")
    .then((props) => {
      
      setData(props.data.matches)
      console.log(props)

      })
    .catch((err) => {
        console.log(err);
      })
    },[])

    return (
      <MenuMatch >
        <div className="menuPrincipal">
        <h1 className="titulo1" > Astro 
        <h1 className="titulo2"> Match</h1></h1>
        {/* <img src={} width={40}> </img>  */}
        </div>

        <button className="button-Voltar" onClick={props.irParaHome} ><img  src={Voltar} width={40}></img></button>

      </MenuMatch>
    );
  }
  
  export default Match;