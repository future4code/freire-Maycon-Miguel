import React from "react";
import { useNavigate } from "react-router-dom";
import { goToCadastroPage, goToFeedPage, goToLoginPage, goToPostPage } from "../../routes/coordinator";
import { Button } from '@chakra-ui/react'

  const HomePage = () => {

  const navigate = useNavigate();


  return (
 
    <div>
      <h1> Home </h1> 
        <Button colorScheme='teal' variant='solid' onClick={() => goToCadastroPage(navigate)}> Cadastro </Button>
        <Button colorScheme='teal' variant='solid' onClick={() => goToFeedPage(navigate)}> Feed </Button>
        <Button colorScheme='teal' variant='solid' onClick={() => goToLoginPage(navigate)}> Login </Button>
        <Button colorScheme='teal' variant='solid' onClick={() => goToPostPage(navigate)}> Post </Button>
    </div>

  );
};

export default HomePage;
