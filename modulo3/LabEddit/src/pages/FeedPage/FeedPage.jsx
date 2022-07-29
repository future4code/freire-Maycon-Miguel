import React from 'react';
import { useNavigate } from 'react-router-dom';
import { goToPostPage } from '../../routes/coordinator';
import {
  Flex,
  Box,
  Center,
  FormControl,
  Input,
  Divider,
  HStack,
  Button,
  Textarea,
  Text,
  Spinner
} from "@chakra-ui/react";
import { useForm } from '../../hooks/useForm';
import { ConfirmandoToken } from '../../components/Token/TokenConfirme';
import { GetPost } from '../../hooks/axios';
import { CreatePost } from '../../hooks/axios';



const FeedPage = () => {

  ConfirmandoToken()

  const navigate = useNavigate()

  const todasPostagens = GetPost()

  const idPost = (id) => {

    window.localStorage.removeItem('IdPost')
    window.localStorage.setItem("IdPost", id)
    goToPostPage(navigate)
  
  }

  const SairDaConta = () => {
    window.localStorage.removeItem('token')

  }

  const { formValues, onChange, cleanFields } = useForm({
    title: "",
    comentario: "",
  })


  const Postar = (event) => {

    event.preventDefault()
    console.log(formValues)
    CreatePost(formValues)
    cleanFields()
  }

  return (
    <Box>
      <Center
        as="header"
        bg="#fc9936"
        color="white"
        fontWeight="bold"
        fontSize="4xl"
        pb="2"
        boxShadow="0 2px 2px #ccc"
      >
        Feed

        <Button
          left={20}
          colorScheme='teal'
          variant='solid'
          onClick={() => SairDaConta()}
        > Sair da conta </Button>
      </Center>
      <Flex
        align="center"
        justify="center"
      >
        <Center
          w="100%"
          height={250}
          bg="white"
          top={100}
          position="absolute"
          p="6"
        >
          <form onSubmit={Postar}>
            <FormControl display="flex" flexDir="column" gap="4">
              <Box w="100%">
                <Input
                  pr='10.5rem'
                  name='title'
                  type='text'
                  value={formValues.title || ''}
                  placeholder="Titlo do post"
                  onChange={onChange} />
              </Box>
              <HStack spacing="4">
                <Box w="100%">
                  <Textarea
                    name='comentario'
                    value={formValues.comentario || ''}
                    onChange={onChange}
                    placeholder='Escreva seu Post...'
                  />
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
                  borderRadius={100}
                  _hover={{ bg: "#fd7f00" }}
                >
                  Postar
                </Button>
              </HStack>
              <Divider orientation='horizontal' />
            </FormControl>
          </form>
          <Center
            w="100%"
            maxW={840}
            top={250}
            position="absolute"
            p="6"
          >
            <HStack display="flex" flexDir="column" gap="4">
              <Box w="100%">

              {todasPostagens.length > 0 ? (todasPostagens && todasPostagens?.map((item) => 
              
              
              <Text onClick={() => idPost(item.id)}
              marginTop='3vw'
              bg='#f5c8845e'
              paddingTop='1vw'
              paddingLeft='2vw'
              borderRadius='1vw'
              noOfLines={3}
              minHeight= '20vw'
              minWidth='40vw'
              maxWidth='90vw'
              maxHeight='35vw'
              cursor='pointer'
              >
              <Text 
              > Enviado por: {item.username} </Text>
              Titulo : {item.title}
              {item.body}
            </Text>  
             )) : (<Spinner color='#fd7f00' size='xl'/>) }

              </Box>
            </HStack>
          </Center>
        </Center>
      </Flex>
    </Box>
  );
}


export default FeedPage;