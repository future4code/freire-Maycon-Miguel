import React from 'react';
import { useNavigate } from 'react-router-dom';
import {goToTripDetailsPage, goToVoltar, goToHomePage, goToCreateTripPage} from '../../routes/coordinator';
import {Container, Titulo, ContainerPreto, ContainerDetalhes} from './styled';
import {DeleteTrip} from '../../hooks/Axios'
import { ConfirmandoToken } from "../../components/ConfirmandoToken";


const AdminHomePage = () => {

  ConfirmandoToken()
  
  const navigate = useNavigate()

  const id = "OB43AXb1cSQ9sjSpVZ4S"
  const auth = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ik9CNDNBWGIxY1NROXNqU3BWWjRTIiwiZW1haWwiOiJhc3Ryb2RldkBnbWFpbC5jb20uYnIiLCJpYXQiOjE2NTc3NDM2Njd9.eMtZTpBA7tXt9wFrUMhDcDvJXOJyjdalwjQYf2TdNaU"
  
  return (
        <Container> 
          <ContainerPreto>         
            <Titulo>
              <h1>  PAINEL ADMINISTRATIVO </h1>
            </Titulo>
            
            <button onClick={() => goToHomePage(navigate)}> HomePage </button>
            <button onClick={() => goToVoltar(navigate)}> voltar </button>
            <button onClick={() => goToTripDetailsPage(navigate)}> Detalhes </button>
            <button onClick={() => goToCreateTripPage(navigate)}> Criar viagem </button>
            <button onClick={() => DeleteTrip(id,auth)}> Deletar </button>


            <ContainerDetalhes>
              <h1> Viagens para Aprovar </h1>
            </ContainerDetalhes>
          </ContainerPreto>
        </Container>
  );
}


export default AdminHomePage;