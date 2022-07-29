import React from 'react';
import { useNavigate } from 'react-router-dom';
import { goToVoltar } from '../../routes/coordinator';
import {
  Flex,
  Box,
  Center,
  FormControl,
  Divider,
  HStack,
  Button,
  Textarea,
  Text,
  CloseButton,
  Spinner
} from "@chakra-ui/react";
import { useForm } from '../../hooks/useForm';
import { ConfirmandoToken } from '../../components/Token/TokenConfirme';
import { GetPostComments } from '../../hooks/axios';
import { CreateComment } from '../../hooks/axios';


const PostPage = () => {

  ConfirmandoToken()

  // const todasPostagens = GetPostComments()

  const navigate = useNavigate()


  const { formValues, onChange, cleanFields } = useForm({
    comentario: "",
  })


  const Postar = (event) => {

    event.preventDefault()
    CreateComment(formValues)
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
        Postar
        <CloseButton
          position='absolute'
          left='80vw'
          onClick={() => goToVoltar(navigate)}
          size='lg'
          bg='#ff000090'
          _hover={{ bg: "#be0808" }}
        />

      </Center>

      <Flex
        align="center"
        justify="center"
      >
        <Center
          w="100%"
          height={300}
          bg="white"
          top={100}
          position="absolute"
          p="6"
        >


          <form onSubmit={Postar}>
            <FormControl display="flex" flexDir="column" gap="4">


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
                  Responder
                </Button>
              </HStack>
              <Divider orientation='horizontal' />
            </FormControl>
          </form>
          <Center
            w="100%"
            maxW={840}
            top={300}
            position="absolute"
            p="6"
          >
                      <HStack display="flex" flexDir="column" gap="4">
            <Box w="100%">
              {/* {todasPostagens.length > 0 ? (todasPostagens && todasPostagens?.map((item) =>
                <Text
                  marginTop='3vw'
                  bg='#f5c8845e'
                  paddingTop='1vw'
                  paddingLeft='2vw'
                  borderRadius='1vw'
                  noOfLines={3}
                  minHeight='20vw'
                  minWidth='40vw'
                  maxWidth='90vw'
                  maxHeight='35vw'
                >
                  <Text
                  > Enviado por: {item.username} </Text>
                  {item.body}
                </Text>
              )) : (<Spinner color='#fd7f00' size='xl' />)} */}

            </Box>
          </HStack>
          </Center>
        </Center>
      </Flex>
    </Box>
  );
}


export default PostPage;