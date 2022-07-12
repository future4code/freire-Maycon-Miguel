import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import  imgTripDetailsPage from "../../assets/TripDetailsPage.png";
import {goToHomePage , goToVoltar} from '../../routes/coordinator';

const DivTripDetailsPage = styled.div`

.div-img-tela{
  background-image: url(${imgTripDetailsPage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: auto;
  height: 100vh;
}
`
const TripDetailsPage = () => {

  const navigate = useNavigate()
  

  return (
        <DivTripDetailsPage> 
          <div className='div-img-tela'>

            <h1>  TripDetailsPage</h1>
            <button onClick={() => goToHomePage(navigate)}> HomePage </button>
            <button onClick={() => goToVoltar(navigate)}> voltar </button>
          </div>

        </DivTripDetailsPage>
  );
}


export default TripDetailsPage;