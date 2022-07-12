import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import  imgApplicationFormPage from "../../assets/ApplicationFormPage.jpg";
import {goToHomePage, goToVoltar} from '../../routes/coordinator';


const DivApplicationFormPage = styled.div`

.div-img-tela{
  background-image: url(${imgApplicationFormPage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: auto;
  height: 100vh;
}

`

const ApplicationFormPage = () => {

  const navigate = useNavigate()
  

  return (
        <DivApplicationFormPage> 
          <div className='div-img-tela'>

            <h1>  ApplicationFormPage</h1>
            <button onClick={() => goToHomePage(navigate)}> HomePage </button>
            <button onClick={() => goToVoltar(navigate)}> voltar </button>
            <button onClick={() => {alert("Formulario Enviado")}}> Enviar </button>
          </div>

        </DivApplicationFormPage>
  );
}


export default ApplicationFormPage;