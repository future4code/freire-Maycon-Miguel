import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import  imgPainelAdministrativo from "../../assets/AdminHomePage.jpg";
import {goToTripDetailsPage, goToVoltar, goToHomePage, goToCreateTripPage} from '../../routes/coordinator';

const DivPainelAdministrativo = styled.div`

.div-img-tela{
  background-image: url(${imgPainelAdministrativo});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: auto;
  height: 100vh;
}

`
const AdminHomePage = () => {
  
  const navigate = useNavigate()

  
  return (
        <DivPainelAdministrativo> 
          <div
          className='div-img-tela'> 
          {/* Boas praticas  styled-components "não se usa className" o melhor e criar uma função para cada um sepado */}

            <h1>  AdminHomePage</h1>
            <button onClick={() => goToHomePage(navigate)}> HomePage </button>
            <button onClick={() => goToVoltar(navigate)}> voltar </button>
            <button onClick={() => goToTripDetailsPage(navigate)}> Detalhes </button>
            <button onClick={() => goToCreateTripPage(navigate)}> Criar viagem </button>
          </div>
        
        </DivPainelAdministrativo>
  );
}


export default AdminHomePage;