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
import { GetPostComments, CreateComment,  CreateCommentVote, ChangeCommentVote} from '../../hooks/axios';
import { ChevronUpIcon, ChevronDownIcon } from '@chakra-ui/icons'


const PostPage = () => {

  ConfirmandoToken()

  const todasPostagens = GetPostComments()

  const VotarComentarios = (id) => {

    window.localStorage.removeItem('IdPost')
    window.localStorage.setItem("IdPost", id)
    CreateCommentVote()
  }

  const ComentariosPut = (id) => {

    window.localStorage.removeItem('IdPost')
    window.localStorage.setItem("IdPost", id)
    ChangeCommentVote()

  }


  const navigate = useNavigate()


  const { formValues, onChange, cleanFields } = useForm({
    comentario: "",
  })


  const comentar = (event) => {

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
          <form onSubmit={comentar}>
            <FormControl display="flex" flexDir="column" gap="4">
              <HStack spacing="4">
                <Box w="100%">
                  <Textarea
                    name='comentario'
                    value={formValues.comentario || ''}
                    onChange={onChange}
                    placeholder='Escreva seu Post...'
                    minWidth='90vw'
                    minHeight='35vw'
                  />
                </Box>
              </HStack>
              <HStack spacing="4" justify="center">
                <Button
                  w={240}
                  p="6"
                  type="submit"
                  bg="linear-gradient(90deg, #FF6489 0%, #F9B24E 100%)"
                  color="white"
                  fontWeight="bold"
                  fontSize="xl"
                  mt="2"
                  borderRadius={10}
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
            top={280}
            position="absolute"
            p="6"
          >
            <HStack display="flex" flexDir="column" gap="4">
              <Box w="100%">
                {todasPostagens.length > 0 ? (todasPostagens && todasPostagens?.map((item) =>

                  <>
                    <Text
                      marginTop='4vw'
                      bg='#e9e9e9'
                      paddingTop='1vw'
                      paddingLeft='2vw'
                      borderRadius='1vw'
                      noOfLines={3}
                      minHeight='40vw'
                      minWidth='90vw'

                    >
                      <Text
                     fontSize='xs'
                     color='#585858'
                     marginBottom='3vw'
                      > Enviado por: {item.username} </Text>
                    
                      {item.body}
                    </Text>

                    <HStack justify="center" bg='#e9e9e9' paddingTop='5vw'>
                      <Box marginLeft='40vw'>
                        <ChevronUpIcon
                          cursor='pointer'
                          onClick={() => VotarComentarios(item.id)}
                          color='#47c200'   
                          _hover={{ color: "#488624" }}
                          w={8} h={8} />
                        {item.voteSum || 0}
                        <ChevronDownIcon
                          cursor='pointer'
                          onClick={() => ComentariosPut(item.id)}
                          color='#c70000'
                          _hover={{ color: "#810101" }}
                          w={8} h={8} />

                      </Box>
                    </HStack>
                  </>
                )) : (<Spinner color='#fd7f00' size='xl' />)}

              </Box>
            </HStack>
          </Center>
        </Center>
      </Flex>
    </Box>
  );
}


export default PostPage;