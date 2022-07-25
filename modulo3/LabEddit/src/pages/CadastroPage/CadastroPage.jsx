import React from 'react';
import { useNavigate } from 'react-router-dom';
import { goToVoltar } from '../../routes/coordinator';



const CadastroPage = () => {

  const navigate = useNavigate()


  return (
    <div>
      <h1> CadastroPage</h1>
      <button onClick={() => goToVoltar(navigate)}> voltar </button>
    </div>
  );
}


export default CadastroPage;