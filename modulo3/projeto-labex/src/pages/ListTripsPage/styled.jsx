import styled from 'styled-components';
import imgListTripsPage from "../../assets/ListTripsPage.png";


export const Container = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${imgListTripsPage});
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
    background-color: #00000055;
    width: 200vh;
    height: 100vh;
    
`

export const Titulo = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Display&display=swap'); 

    font-family: 'Big Shoulders Display', cursive;
    margin: 8vh 0 15vh 0 ;
    color: #5eff00;
    font-size: 12px;
    padding: 15px;
    

`