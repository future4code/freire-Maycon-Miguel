import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Aceitar from './img/aceitar.png';
import Rejeitar from './img/rejeitar.png';
import styled from "styled-components";


const CssButton = styled.div`

  .button-aceitar , .button-rejeitar {

  background: none;
  border: none;
  
  cursor: pointer;
  }

  .img-aceitar:hover, .img-rejeitar:hover{
    transform: scale(1.1);
  }
`


const Card =  () => {

    const [id, setId] = useState("")
    const [age, setAge] = useState(0)
    const [name, setName] = useState("")
    const [photo, setPhoto] = useState("")
    const [bio, setBio] = useState("")


    useEffect( () =>
        {
        axios
          .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:maycon/person")
          .then((props) => {
            console.log(props)
            setId(props.data.profile.id)
            setName(props.data.profile.name)
            setPhoto(props.data.profile.photo)
            setBio(props.data.profile.bio)
            setAge(props.data.profile.age)
            
          })
          .catch((err) => {
            console.log(err);
          })},[])


    return(

        <div>
              <h1>{name}, {age}</h1>
              <p>{bio}</p>
              <img className="pessoas-img" src={photo} width={350}></img> 

              <CssButton>
              <div>
              <button className="button-aceitar"><img className="img-aceitar" src={Rejeitar} width={90}></img></button>
              <button className="button-rejeitar"><img className="img-rejeitar"src={Aceitar} width={100}></img></button>
              </div>
              </CssButton>
        </div>
    )



}

export default Card;