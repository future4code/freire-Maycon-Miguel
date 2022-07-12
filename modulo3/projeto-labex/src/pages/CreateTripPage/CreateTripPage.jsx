import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import imgCreateTripPage from "../../assets/CreateTripPage.jpg";
import {goToHomePage, goToVoltar} from '../../routes/coordinator';


const DivCreateTripPage = styled.div`

.div-img-tela{
  background-image: url(${imgCreateTripPage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: auto;
  height: 100vh;
}

`

const CreateTripPage = () => {

  const navigate = useNavigate()
  

  return (
        <DivCreateTripPage> 

          <div className='div-img-tela'>

            <h1> CreateTripPage</h1>
            <button onClick={() => goToHomePage(navigate)}> HomePage </button>
            <button onClick={() => goToVoltar(navigate)}> voltar </button>
            <button onClick={() => {alert("Formulario Criado")}}> Enviar </button>
          </div>

        </DivCreateTripPage>
  );
}


export default CreateTripPage;