import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {goToHomePage, goToVoltar} from '../../routes/coordinator';


const DivErro = styled.div`

.div-img-tela{

  background-color: #f1b8c9;
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