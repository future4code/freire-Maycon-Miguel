import React from 'react';
import { useNavigate } from 'react-router-dom';
import { goToVoltar } from '../../routes/coordinator';



const LoginPage = () => {

  const navigate = useNavigate()


  return (
    <div>
      <h1> LoginPage </h1>
      <button onClick={() => goToVoltar(navigate)}> Voltar </button>
    </div>
  );
}


export default LoginPage;