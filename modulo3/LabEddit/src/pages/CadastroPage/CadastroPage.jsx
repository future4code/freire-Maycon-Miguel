import React from 'react';
import { useNavigate } from 'react-router-dom';
import { goToVoltar } from '../../routes/coordinator';
import { Button } from '@chakra-ui/react'



const CadastroPage = () => {

  const navigate = useNavigate()


  return (
    <div>
      <h1> CadastroPage</h1>
      <Button colorScheme='teal' variant='solid' onClick={() => goToVoltar(navigate)}> voltar </Button>
    </div>
  );
}


export default CadastroPage;