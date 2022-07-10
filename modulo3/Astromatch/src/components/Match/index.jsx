import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Voltar from "./img/voltar.png";
import CarregandoCoracao from "../Card/img/carregando.ico"

const MenuMatch = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;


  .menuPrincipal {

    position: absolute;
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

    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    font-size: 25px;
    color: #00dd88de;
  }

  .titulo2 {

    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    font-size: 25px;
    color: #4d0364bd;
    text-align: center;
  }

  .container-matchs {
    position: absolute;
    margin-left: -180px;
    margin-top: -400px;
  }

  .scroll-matchs::-webkit-scrollbar{

    width: 10px;
    border: 1px solid #a1a1a15c;
    border-radius: 50px;


  }

  .scroll-matchs::-webkit-scrollbar-thumb{

    background-color: #4d0364bd ;
    border-radius: 10px;
  }

  .scroll-matchs{

    overflow-y: scroll;
    position: absolute;
    background-color: whitesmoke;
    margin-top: 80px;
    width: 370px;
    height: 580px;

  }



`;

const ImgMatchs = styled.div`

  display: grid;
  position: absolute;
  max-block-size: -100px;

  .img-matchs {
    margin-top: 20px;
    width: 70px;
    height: 70px;
    object-fit: cover;
    border-radius: 100%;
    margin-left: 20px;
    position: relative;
  }
`;
const H1Mactchs = styled.div`

  position: absolute;

  margin-left: 100px;
  margin-top: -15px;
  

  .h1-matchs {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    padding-left: 40px;
    font-size: 20px;
    margin-block-start: 65px;
  }


`;

const ButtonVoltar = styled.div`

  position: absolute;
  margin-left: 180px;
  margin-top: 30px;

  .button-Voltar {
    
    filter: contrast(0.9);
    background: none;
    border: none;
    cursor: pointer;

    margin-top: -345px;
    margin-left: 145px;
  }

  .button-Voltar:hover {
    transform: scale(1.15);
  }
`;

const Carregando =  styled.div`

    position: absolute;

    margin-bottom: 150px;

    .texto-carregando {

      font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

      margin-left: -10px;

      font-size: 20px;

      color: #4d0364;
      position: absolute;
      white-space: nowrap;      

    }

    .carregando{
        animation: is-rotating 0.49s linear infinite;
        height: 70px;
        width: 70px;


        margin-top: 100px;
        margin-left: 20px;
        border-radius: 50px;
  
    }
    @keyframes is-rotating {
        to {
            transform: scale(1.15);
        }
        
    }

`

function Match(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/maycon/matches"
      )
      .then((props) => {
        setData(props.data.matches);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <MenuMatch>
      <div className="menuPrincipal">
        <h1 className="titulo1">
          Astro
        <h1 className="titulo2"> Match</h1>
      <ButtonVoltar>
        <button className="button-Voltar" onClick={props.irParaHome}>
          <img src={Voltar} width={50}></img>
        </button>
      </ButtonVoltar>
        </h1>
      </div>

      {data.length > 0 ? (
      <div className="scroll-matchs">

      
        <ImgMatchs>
            {data.map((item, index, array) => {
              return <img className="img-matchs" src={data[index].photo}></img>;
            })}
          </ImgMatchs>

          <H1Mactchs>
            {data.map((item, index, array) => {
              return <h1 className="h1-matchs"> {data[index].name}</h1>;
            })}
          </H1Mactchs>

        </div>

      ) : (
    
        <Carregando>
          <h1 className="texto-carregando"> Sem Matchs </h1>
          <img className='carregando' src={CarregandoCoracao}></img>
        </Carregando>

      ) }
        


    </MenuMatch>
  );
}

export default Match;
