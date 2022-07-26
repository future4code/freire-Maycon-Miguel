import React from 'react';
import { useNavigate } from 'react-router-dom';
import { goToVoltar } from '../../routes/coordinator';
import { Button } from '@chakra-ui/react'


const LoginPage = () => {

  const navigate = useNavigate()

  return (
      <div>
      <h1> LoginPage </h1>
      <Button 
      colorScheme='teal' 
      variant='solid'
       onClick={() => goToVoltar(navigate)}
      > Voltar </Button>

      
      </div>
  );
}


export default LoginPage;


