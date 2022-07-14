import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Container,ContainerPreto,Titulo} from './styled'
import {goToHomePage, goToVoltar, goToApplicationFormPage} from '../../routes/coordinator';
import {GetTrips} from '../../hooks/Axios'

const ListTripsPage = () => {

  const navigate = useNavigate()


  return (
        <Container> 
          <ContainerPreto>

            <Titulo>
            <h1> LISTA DE VIAGENS DISPONIVEIS </h1>
            </Titulo>
            
            <button onClick={() => goToHomePage(navigate)}> HomePage </button>
            <button onClick={() => goToVoltar(navigate)}> voltar </button>
            <button onClick={() => goToApplicationFormPage(navigate)}> inscreve-se </button>
            <button onClick={() => GetTrips()}> ver lista </button>
  
          </ContainerPreto>
        </Container>
  );
}


export default ListTripsPage;