import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Aceitar from './img/aceitar.png';
import Rejeitar from './img/rejeitar.png';
import ResetarImg from './img/resetar.png'
import styled from "styled-components";

const ContainerButton = styled.div`

  .img-pessoa {
    
  height: 60%;
  width: 26%;
  object-fit: scale-down; 
  margin-left: 25px;
  position: absolute;

  
}

.img-pessoa-borrada {

  object-fit: cover; 
  padding-top: 30px;
  padding-left: 20px;
  position: absolute;
  height: 60%;
  width: 26%;
  border-radius: 50px;
  filter: blur(30px);  

}

`

const CssButton = styled.div`

  margin-top: 200px;
  display: block;
  position: absolute;

  .button-aceitar , .button-rejeitar, .button-resetar {
  
  background: none;
  border: none;
  cursor: pointer;

  }

  .button-aceitar {
    position: absolute;

    margin-top: 318px;
    margin-left: 300px;

  }
  
  .button-resetar{
    
    position: absolute;
    margin-top: 335px;
    padding-left: 185px;

  }
  
  .button-rejeitar{
    position: absolute;

    margin-top: 320px;
    margin-left: 40px;
  }



  .img-aceitar:hover, .img-rejeitar:hover, .img-resetar:hover {
    transform: scale(1.1);

  }
`
const CssTexto = styled.div`

position: absolute;

margin-top: 320px;
margin-left: 30px;

.nome-idade-pessoa {
  
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  display: flex;
  font-size: 22px;
  color: #ffffff;
  left: 40%;
  word-wrap: break-word;
  width: 300px;
  text-align: left

  }

  .bio-pessoa {

  margin-left: 10px;
  margin-top: 5px;

  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  display: flex;
  font-size: 18px;
  color: #dadada;

  left: 40%;
  word-wrap: break-word;
  width: 300px;
  text-align: left
  }
`

const Card =  () => {

    const [id, setId] = useState("")
    const [age, setAge] = useState(0)
    const [name, setName] = useState("")
    const [photo, setPhoto] = useState("")
    const [bio, setBio] = useState("")
    const [proximo , setProximo] = useState(0)

    useEffect( () =>
        {
        axios
          .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/maycon/person")
          .then((props) => {
            setId(props.data.profile.id)
            setName(props.data.profile.name)
            setPhoto(props.data.profile.photo)
            setBio(props.data.profile.bio)
            setAge(props.data.profile.age)
            
          })
          .catch((err) => {
            console.log(err);
          })},[proximo])


    const Match = (boolean) => {

      axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/maycon/choose-person",
        {"id": id,
          "choice": boolean})
      .then(() => {
        console.log(`O match foi ${boolean}`)
        console.log(photo)
        setProximo(proximo + 1)


        })
      .catch((err) => {
          console.log(err);
        })
      
      }

      const Resetar = () => {

        axios
          .put(
            "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/maycon/clear")
            .then((props) => {
              console.log(props)
              setProximo(0)
              setProximo(proximo + 1)
      
              })
            .catch((err) => {
                console.log(err);
              })

      }

    return(

      <ContainerButton>
              <img className="img-pessoa-borrada" src={photo} ></img> 
              <img className="img-pessoa" src={photo} width={350}></img> 
              <CssTexto>
                <h1 className="nome-idade-pessoa">{name}, {age}</h1>
                <p className="bio-pessoa">{bio}</p>
              </CssTexto>
              
              <CssButton>  
              <div>
              <button className="button-rejeitar" onClick={() => {Match(false)}}><img className="img-rejeitar"src={Rejeitar} width={70}></img></button>
              <button className="button-resetar" onClick={Resetar} > <img className="img-resetar" src={ResetarImg} width={45}></img> </button>
              <button className="button-aceitar" onClick={() => {Match(true)}} ><img className="img-aceitar" src={Aceitar} width={70}></img></button>
              </div>
              </CssButton>
        </ContainerButton>
    )



}

export default Card;