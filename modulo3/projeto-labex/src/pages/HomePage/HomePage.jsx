import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import imgHomePage from "../../assets/HomePage.jpg";
import {goToListTripsPage , goToLoginPage} from '../../routes/coordinator.jsx';


const DivHomePage = styled.div`

.div-img-tela{
  background-image: url(${imgHomePage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: auto;
  height: 100vh;
}

`

const HomePage = () => {
  
  const navigate = useNavigate()


  return (
        <DivHomePage> 
          <div className='div-img-tela'>
            <h1>  HomePage </h1>
            <button onClick={() => goToListTripsPage(navigate)}> Ver Viagens </button>
            <button onClick={() => goToLoginPage(navigate)}> Login </button>
          </div>
        </DivHomePage>
  );
}


export default HomePage;