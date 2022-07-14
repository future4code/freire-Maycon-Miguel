import styled from 'styled-components';
import  imgPainelAdministrativo from "../../assets/AdminHomePage.jpg";

export const Container = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${imgPainelAdministrativo});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: auto;
    height: 100vh;
`

export const ContainerPreto = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    background-color: #00000055;
    width: 200vh;
    height: 100vh;
    
`
export const Titulo = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@300&display=swap');
    font-family: 'Big Shoulders Display', cursive;
    margin: 8vh 0 5vh 0 ;
    color: #ffffff;
    font-size: 12px;
    background-color: #00000092;
    padding: 15px;
    
`
export const ContainerDetalhes = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    color: #fff;
    background-color: #30308b;
    width: 60vw;
    height: 60vh;

`