import { useNavigate } from 'react-router-dom';
import { goToCadastroPage } from '../../routes/coordinator';
import {
  Flex,
  Box,
  Center,
  FormControl,
  Input,
  FormLabel,
  HStack,
  Button,
  Divider
} from "@chakra-ui/react";
import { useForm } from '../../hooks/useForm';
import { Login } from '../../hooks/axios';
import { LoginToken } from '../../components/Token/Token';

const LoginPage = () => {

  LoginToken()

  const navigate = useNavigate()

  const {formValues, onChange, cleanFields} = useForm({
    email: "",
    password: "",})


  const FazerLogin = (event) => {

    event.preventDefault()
    Login(formValues.email, formValues.password)
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
                bg="linear-gradient(90deg, #FF6489 0%, #F9B24E 100%)"
                borderRadius={50}
                color="white"
                fontWeight="bold"
                fontSize="xl"
                mt="2"
                marginTop={5}
              >
                Entrar
              </Button>
            </HStack>
            <Divider orientation='horizontal' />

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
                bg="#ffffff0"
                color="#FE7E02"
                fontWeight="bold"
                fontSize="xl"
                mt="2"
                borderRadius={50}
                borderColor= "#FE7E02"
                colorScheme='teal' 
                variant='outline'
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


