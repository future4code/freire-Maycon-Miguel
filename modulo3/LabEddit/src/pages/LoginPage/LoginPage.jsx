import React from 'react';
import { useNavigate } from 'react-router-dom';
import { goToVoltar, goToCadastroPage } from '../../routes/coordinator';
import {
  Flex,
  Box,
  Center,
  FormControl,
  Input,
  FormLabel,
  HStack,
  Button
} from "@chakra-ui/react";
import { useForm } from '../../hooks/useForm';

const LoginPage = () => {

  const navigate = useNavigate()

  const {formValues, onChange, cleanFields} = useForm({
    email: "",
    password: "",})


  const FazerLogin = (event) => {

    event.preventDefault()
    console.log(formValues)
    cleanFields()
  }



  return (
    <Box h="100vh">
      <Center
        as="header"
        bg="#fc9936"
        color="white"
        fontWeight="bold"
        fontSize="4xl"
        pb="2"
        boxShadow="0 2px 2px #ccc"
      >
        Login
      </Center>
      <Flex
        align="center"
        justify="center"
      >
        <Center
          w="100%"
          height={250}
          bg="white"
          top={110}
          position="absolute"
          p="6"
        >
        <form onSubmit={FazerLogin}>
          <FormControl display="flex" flexDir="column" gap="4">
            <Box w="100%">
              <FormLabel htmlFor="email" >E-mail</FormLabel>
              <Input 
                  w={300}
                  name='email'
                  type="email"
                  value={formValues.email || ''}
                  placeholder="E-mail"
                  onChange={onChange} />
            </Box>
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="password"> Senha </FormLabel>
                <Input 
                  name='password'
                  type='password'
                  value={formValues.password || ''}
                  placeholder="password"
                  onChange={onChange}/>
              </Box>
            </HStack>
            <HStack spacing="4" justify="center">
              <Button
                w={240}
                p="6"
                type="submit"
                bg="#ffb56c"
                color="white"
                fontWeight="bold"
                fontSize="xl"
                mt="2"
                _hover={{ bg: "#fd7f00" }}
              >
                Entrar
              </Button>
            </HStack>
          </FormControl> 
          </form>
        </Center>
  
        <Center
          w="100%"
          maxW={840}
          top={350}
          position="absolute"
          p="6"
        >
        <Button
                w={240}
                p="6"
                type="submit"
                bg="#ffb56c"
                color="white"
                fontWeight="bold"
                fontSize="xl"
                mt="2"
                _hover={{ bg: "#fd7f00" }}
                onClick={() => goToCadastroPage(navigate)}
              >
                Criar conta
              </Button>
            </Center>
      </Flex>
    </Box>
  );
}


export default LoginPage;


