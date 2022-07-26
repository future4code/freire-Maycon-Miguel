import React from 'react';
import { useNavigate } from 'react-router-dom';
import { goToVoltar } from '../../routes/coordinator';
import { Button } from '@chakra-ui/react'



const PostPage = () => {

  const navigate = useNavigate()


  return (
    <div>
      <h1> PostPage </h1>
      <Button colorScheme='teal' variant='solid'  onClick={() => goToVoltar(navigate)}>PostPage</Button>
    </div>
  );
}


export default PostPage;