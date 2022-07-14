import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import  imgTripDetailsPage from "../../assets/TripDetailsPage.png";
import {goToHomePage , goToVoltar} from '../../routes/coordinator';
import {GetTripDetail, CreateTrip} from '../../hooks/Axios'


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

  // receve id e auth do email
  const id = "OB43AXb1cSQ9sjSpVZ4S"
  const auth = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ik9CNDNBWGIxY1NROXNqU3BWWjRTIiwiZW1haWwiOiJhc3Ryb2RldkBnbWFpbC5jb20uYnIiLCJpYXQiOjE2NTc4MDExNDJ9.dPQq6MG8cmvafGEgHsGNHg5SR4keDgV3x2elckqmVNU"
  

  return (
        <DivTripDetailsPage> 
          <div className='div-img-tela'>

            <h1>  TripDetailsPage</h1>
            <button onClick={() => goToHomePage(navigate)}> HomePage </button>
            <button onClick={() => goToVoltar(navigate)}> voltar </button>
            <button onClick={() => GetTripDetail(id, auth)} > ver detalhes </button>
            <button onClick={() => CreateTrip(auth)} > Criar nova viagem </button>
          </div>

        </DivTripDetailsPage>
  );
}


export default TripDetailsPage;