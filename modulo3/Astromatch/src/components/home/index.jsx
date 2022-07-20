import styled from "styled-components";
import Card from "../Card";
import { useState } from "react";
import Notificacao from './img/notificacao.png'


const Menu = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  
 .button-notificacao {

    position: absolute;
    margin-top: -20px;
    margin-left: 70px;
    background: none;
    border: none;
    cursor: pointer;


    padding: 20px;
   
 } 

 .button-notificacao:hover{

  transform: scale(1.3);
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
  margin-bottom: 20px;
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
function Home(props) {


    return (
      <Menu >

        <div className="menuPrincipal">
            <h1 className="titulo1" > Astro 
            <h1 className="titulo2"> Match
            <button className="button-notificacao" onClick={props.irParaMatch} ><img  src={Notificacao} width={30}></img></button>
            </h1></h1>
            
            <Card></Card>
            
        </div>
      </Menu>
    );
  }
  
  export default Home;