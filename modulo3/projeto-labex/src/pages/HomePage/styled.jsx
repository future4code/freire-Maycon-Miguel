import styled from 'styled-components';
import imgHomePage from "../../assets/HomePage.jpg";

export const Container = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${imgHomePage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: auto;
    height: 100vh;
`
export const Retangulo = styled.div`

    background-color: #000000ce;
    min-width: 35vw;
    min-height: 70vh;
    text-align: center;
    border-radius: 35px;

`

export const Titulo = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Display&display=swap');
    font-family: 'Big Shoulders Display', cursive;

    margin: 8vh 0 15vh 0 ;
    color: #73ff00;
    font-size: 16px;

`

export const Button = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    
    flex-direction: column;
    margin-bottom: 8vh;

    button {

        border: none;
        outline: none;
        border-radius: 32px;
        font-size: large;
        padding: 1vw;
        min-width: 24vw;
        
        cursor: pointer;

    }

    img {

        position: absolute;
        margin-top: -1vh;
        margin-left: -4vw;
    }
`