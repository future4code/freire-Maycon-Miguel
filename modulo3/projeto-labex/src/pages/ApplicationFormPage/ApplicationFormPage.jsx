import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import  imgApplicationFormPage from "../../assets/ApplicationFormPage.jpg";
import {goToHomePage, goToVoltar} from '../../routes/coordinator';
import {ApplytoTrip} from '../../hooks/Axios';

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
  
  const id = "OB43AXb1cSQ9sjSpVZ4S"

  return (
        <DivApplicationFormPage> 
          <div className='div-img-tela'>

            <h1>  ApplicationFormPage</h1>
            <button onClick={() => goToHomePage(navigate)}> HomePage </button>
            <button onClick={() => goToVoltar(navigate)}> voltar </button>
            <button onClick={() => {alert("Formulario Enviado")}}> Enviar </button>
            <button onClick={() => {ApplytoTrip(id)}}> Ver se o formulario ta enviando </button>
            
          </div>

        </DivApplicationFormPage>
  );
}


export default ApplicationFormPage;