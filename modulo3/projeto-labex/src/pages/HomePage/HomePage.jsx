import React from 'react';
import { useNavigate } from 'react-router-dom';
import {goToListTripsPage , goToLoginPage} from '../../routes/coordinator.jsx';
import {Container, Retangulo,Titulo, Button} from './styled';
import Controle from '../../assets/controle.png'
import Portal from '../../assets/portal.png'

const HomePage = () => {
  
  const navigate = useNavigate()

  return (
        <Container> 
          <Retangulo>
            <Titulo>
            <h1>  VIAGENS ESPACIAIS </h1>
            </Titulo>
            <Button>
            <button onClick={() => goToListTripsPage(navigate)}><img src={Portal} width={30}></img> Ver Viagens </button>
            </Button>
            <Button>
          
            <button onClick={() => goToLoginPage(navigate)}><img src={Controle} width={45} ></img> Área admin </button>
            </Button>
          </Retangulo>
        </Container>
  );
}


export default HomePage;