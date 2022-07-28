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
  CloseButton
} from "@chakra-ui/react";
import { useForm } from '../../hooks/useForm';



const PostPage = () => {


  const navigate = useNavigate()


  const { formValues, onChange, cleanFields } = useForm({
    comentario: "",
  })


  const Postar = (event) => {

    event.preventDefault()
    console.log(formValues)
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
              <Box w="100%">

            <HStack display="flex" flexDir="column" gap="4">
              <Box w="100%">
                <Text mb='10px'> Nome da pessoa</Text>
                <Textarea
                  value={'Texto da postagem em map'}
                  size='sm'
                  w={340}
                  h={100}
                  pointerEvents='none'
                />
              </Box>
            </HStack>
              </Box>
              <HStack spacing="4">
                <Box w="100%">
                  <Textarea
                    name='comentario'
                    value={formValues.comentario || ''}
                    onChange={onChange}
                    placeholder='Adicionar comentario'
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
                <Text mb='10px'> Nome da pessoa</Text>
                <Textarea
                  value={'Texto da postagem em map'}
                  size='sm'
                  w={340}
                  h={100}
                  pointerEvents='none'
                />
              </Box>
            </HStack>
          </Center>
        </Center>
      </Flex>
    </Box>
  );
}


export default PostPage;