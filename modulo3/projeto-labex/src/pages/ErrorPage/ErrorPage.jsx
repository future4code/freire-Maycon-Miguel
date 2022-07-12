import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import imgError from "../../assets/ErrorPage.webp";
import {goToHomePage, goToVoltar} from '../../routes/coordinator';


const DivErro = styled.div`

.div-img-tela{
  background-image: url(${imgError});
  background-repeat: no-repeat;
  background-position: center;
  width: auto;
  height: 100vh;
}

`


const ErrorPage = () => {

  const navigate = useNavigate()
  


  return (
        <DivErro> 
          <div className='div-img-tela'>

            <h1>  A pagina não existe </h1>
            <button onClick={() => goToHomePage(navigate)}> HomePage </button>
            <button onClick={() => goToVoltar(navigate)}> voltar </button>
            </div>

        </DivErro>
  );
}


export default ErrorPage;