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
  RadioGroup,
  Radio,
  Button,
} from "@chakra-ui/react";

const LoginPage = () => {

  const navigate = useNavigate()

  return (


    <Box h="100vh">
      <Center
        as="header"
        h={150}
        bg="#fc9936"
        color="white"
        fontWeight="bold"
        fontSize="4xl"
        pb="8"
      >
        Login
      </Center>
      <Flex
        align="center"
        justify="center"
        bg="blackAlpha.200"
        h="calc(100vh - 150px)"
      >
        <Center
          w="100%"
          maxW={840}
          bg="white"
          top={100}
          position="absolute"
          borderRadius={5}
          p="6"
          boxShadow="0 1px 2px #ccc"
        >
          <FormControl display="flex" flexDir="column" gap="4">
            <Box w="100%">
              <FormLabel htmlFor="email">E-mail</FormLabel>
              <Input id="email" type="email" />
            </Box>
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="password"> Senha </FormLabel>
                <Input id="password" />
              </Box>
            </HStack>
            <HStack justify="center">
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
          
          <HStack>
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
                Criar conta
              </Button>
      </HStack>
          
        </Center>

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
                Criar conta
              </Button>
        <Button
        colorScheme='teal'
        variant='solid'
        onClick={() => goToVoltar(navigate)}
      > Voltar </Button>
      </Flex>
    </Box>
  );
}


export default LoginPage;


