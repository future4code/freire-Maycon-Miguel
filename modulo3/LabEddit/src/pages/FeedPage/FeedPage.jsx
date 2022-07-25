import React from 'react';
import { useNavigate } from 'react-router-dom';
import { goToVoltar } from '../../routes/coordinator';



const FeedPage = () => {

  const navigate = useNavigate()


  return (
    <div>
      <h1> FeedPage </h1>
      <button onClick={() => goToVoltar(navigate)}> Voltar </button>
    </div>
  );
}


export default FeedPage;