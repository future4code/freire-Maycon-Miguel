import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Aceitar from "./img/aceitar.png";
import Rejeitar from "./img/rejeitar.png";
import ResetarImg from "./img/resetar.png";
import CarregandoCoracao from "./img/carregando.ico"
import styled from "styled-components";

const ContainerButton = styled.div`

  .img-pessoa {
    height: 100%;
    width: 100%;
    object-fit: scale-down;
  }

  .img-limitador-tamanho {

    margin-left: 20px;
    width: 380px;
    height: 480px;
    position: absolute;

  }


  .img-pessoa-borrada {

    object-fit: cover;  
    height: 100%;
    width: 100%;
    filter: blur(2px);
    
  }
    .img-borrada-limitador-tamanho{

    position: absolute;
    margin-left: 20px;
    width: 380px;
    height: 480px;
  }
`;

const CssButton = styled.div`
  margin-top: 200px;
  display: block;
  position: absolute;

  .button-aceitar,
  .button-rejeitar,
  .button-resetar {
    background: none;
    border: none;
    cursor: pointer;
    
  }

  .button-aceitar {
    position: absolute;

    margin-top: 318px;
    margin-left: 300px;
  }

  .button-resetar {
    position: absolute;
    margin-top: 335px;
    margin-left: 185px;
  }

  .button-rejeitar {
    position: absolute;

    margin-top: 320px;
    margin-left: 40px;
  }

  .img-aceitar:hover,
  .img-rejeitar:hover,
  .img-resetar:hover {
    transform: scale(1.1);
  }
`;
const CssTexto = styled.div`
  position: absolute;

  margin-top: 350px;
  margin-left: 20px;


  background-color: #0202029b;

  padding-right: 60px;
  padding-bottom: 20px ;
  padding-left: 10px;

  .nome-idade-pessoa {

    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    display: flex;
    font-size: 22px;
    color: #ffffff;
    left: 40%;
    word-wrap: break-word;
    width: 300px;
    text-align: left;
  }


  .bio-pessoa {

    margin-left: 10px;
    margin-top: 5px;

    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    display: flex;
    font-size: 18px;
    color: #ffffff;

    left: 40%;
    word-wrap: break-word;
    width: 300px;
    text-align: left;


  }
`;

const Carregando =  styled.div`

    position: absolute;

    margin-left: 185px;
    margin-top: 80px;


    .texto-carregando {

      margin-top: 100px;
      margin-left: -80px;


      color: #4d0364;
      position: absolute;
      white-space: nowrap;
      font-size: 20px;
      font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    
    }

    .carregando{
        animation: is-rotating 0.49s linear infinite;
        height: 70px;
        width: 70px;


        margin-top: 200px;
        border-radius: 50px;
  
    }
    @keyframes is-rotating {
        to {
            transform: scale(1.15);
        }
        
    }
`

const Card = () => {
  const [id, setId] = useState("");
  const [age, setAge] = useState(0);
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [bio, setBio] = useState("");
  const [proximo, setProximo] = useState(0);

  useEffect(() => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/maycon/person"
      )
      .then((props) => {
        setId(props.data.profile.id);
        setName(props.data.profile.name);
        setPhoto(props.data.profile.photo);
        setBio(props.data.profile.bio);
        setAge(props.data.profile.age);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [proximo]);

  const Match = (boolean) => {
    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/maycon/choose-person",
        { id: id, choice: boolean }
      )
      .then(() => {
        setProximo(proximo + 1);
      })
      .catch((err) => {
        setPhoto("")
        console.log(err);
      });
  };

  const Resetar = () => {
    axios
      .put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/maycon/clear"
      )
      .then(() => {
        setProximo(0);
        setProximo(proximo + 1);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {photo.length > 0 ? (
       
          <div>
          <ContainerButton>
            <div className="img-borrada-limitador-tamanho">
                <img className="img-pessoa-borrada" src={photo}></img>
            </div>
            <div className="img-limitador-tamanho">
              <img className="img-pessoa" src={photo}></img>
            </div>
          </ContainerButton>
          <CssTexto>
      
              <h1 className="nome-idade-pessoa">
                {name}, {age}
              </h1>
              <p className="bio-pessoa">{bio}</p>     
          </CssTexto>
          </div>
        
      ) : (
        <Carregando>
          <h1 className="texto-carregando"> Buscando Novas Pessoas </h1>
          <img className='carregando' src={CarregandoCoracao}></img>
        </Carregando>
      )}

      <CssButton>
        <div>
          <button
            className="button-rejeitar"
            onClick={() => {
              Match(false);
            }}
          >
            <img className="img-rejeitar" src={Rejeitar} width={70}></img>
          </button>
          <button className="button-resetar" onClick={Resetar}>
            {" "}
            <img className="img-resetar" src={ResetarImg} width={45}></img>{" "}
          </button>
          
          <button
            className="button-aceitar"
            onClick={() => {
              Match(true);
            }}
            
          >
            <img className="img-aceitar" src={Aceitar} width={70}></img>
          </button>
          
        </div>
      </CssButton>
    </div>
  );
};

export default Card;
