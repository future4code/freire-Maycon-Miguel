
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToLoginPage } from "../../routes/coordinator";


export const ConfirmandoToken = () => {

  const navigate = useNavigate();

  useEffect(() => {

    const token = window.localStorage.getItem('token')

    if(token === null){
      goToLoginPage(navigate)
    } 
    
  },[])

}