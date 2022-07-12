import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import  imgListTripsPage from "../../assets/ListTripsPage.png";
import {goToHomePage, goToVoltar, goToApplicationFormPage} from '../../routes/coordinator';

const DivListTripsPage = styled.div`

.div-img-tela{
  background-image: url(${imgListTripsPage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: auto;
  height: 100vh;
}

`


const ListTripsPage = () => {

  const navigate = useNavigate()
  
    
  return (
        <DivListTripsPage> 
          <div className='div-img-tela'>

            <h1>  ListTripsPage</h1>
            <button onClick={() => goToHomePage(navigate)}> HomePage </button>
            <button onClick={() => goToVoltar(navigate)}> voltar </button>
            <button onClick={() =>goToApplicationFormPage(navigate)}> inscreve-se </button>
          </div>

        </DivListTripsPage>
  );
}


export default ListTripsPage;