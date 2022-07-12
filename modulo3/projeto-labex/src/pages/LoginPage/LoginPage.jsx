import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import imgLoginPage from "../../assets/LoginPage.jpg";
import {goToHomePage, goToVoltar, goToEntra} from '../../routes/coordinator';

const DivLoginPage = styled.div`

.div-img-tela{
  background-image: url(${imgLoginPage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: auto;
  height: 100vh;
}

`

const LoginPage = () => {

  const navigate = useNavigate()


  return (
        <DivLoginPage> 
          <div className='div-img-tela'>

            <h1>  LoginPage</h1>
            <button onClick={() => goToHomePage(navigate)}> HomePage </button>
            <button onClick={() => goToVoltar(navigate)}> voltar </button>
            <button onClick={() => goToEntra(navigate)}> Entrar </button>

          </div>

        </DivLoginPage>
  );
}


export default LoginPage;