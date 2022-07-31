import React from 'react';
import { useNavigate } from 'react-router-dom';
import { goToVoltar } from '../../routes/coordinator';
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
import { LoginToken } from '../../components/Token/Token';

const CadastroPage = () => {

  LoginToken()

  const navigate = useNavigate()

  const { formValues, onChange, cleanFields } = useForm({
    name: "",
    email: "",
    password: "",
  })


  const FazerCadastro = (event) => {

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
        Cadastro


        <Button
          left={18}
          colorScheme='teal'
          variant='solid'
          onClick={() => goToVoltar(navigate)}
        > Voltar </Button>
      </Center>
      <Flex
        align="center"
        justify="center"
      >
        <Center
          w="100%"
          height={250}
          bg="white"
          top={150}
          position="absolute"
          p="6"
        >
            <form onSubmit={FazerCadastro}>
            <FormControl display="flex" flexDir="column" gap="4">

                <Box w="100%">
                  <FormLabel>  Nome de usuário </FormLabel>
                  <Input
                    w={300}
                    name='name'
                    type='text'
                    value={formValues.name || ''}
                    placeholder="Nome"
                    onChange={onChange} />
                </Box>
              <Box w="100%">
                <FormLabel >E-mail</FormLabel>
                <Input
                  name='email'
                  type="email"
                  value={formValues.email || ''}
                  placeholder="E-mail"
                  onChange={onChange} />
              </Box>
              <HStack spacing="4">
                <Box w="100%">
                  <FormLabel> Senha </FormLabel>
                  <Input
                    name='password'
                    type='password'
                    value={formValues.password || ''}
                    placeholder="password"
                    onChange={onChange} />
                </Box>
              </HStack>
              <HStack justify="center">
                <Button
                  w={240}
                  p="6"
                  type="submit"
                  bg="linear-gradient(90deg, #FF6489 0%, #F9B24E 100%)"
                  borderRadius={50}
                  color="white"
                  fontWeight="bold"
                  fontSize="xl"
                  mt="8"
                  _hover={{ bg: "#fd7f00" }}
                >
                  Criar conta
                </Button>
              </HStack>
              </FormControl>
            </form>
        </Center>
      </Flex>
    </Box>

  );
}


export default CadastroPage;