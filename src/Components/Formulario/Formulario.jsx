import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
import './Formulario.css'
function Contacto() {
  return (
    <Box py={10} px={6}>
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="center"
        gap={10}
        maxW="1000px"
        mx="auto"
      >
       
        <Box flex="1" textAlign={{ base: "center", md: "left" }}>
          <Heading fontSize="3xl" mb={4}>
            Contactanos
          </Heading>
          <Text fontSize="lg" >
            Nos encantaría saber de vos. Completá el formulario y te
            responderemos lo antes posible. Cada consulta es importante para
            nosotros ❤️
          </Text>
        </Box>

       
        <Box flex="1" w="100%">
          <VStack
            as="form"
            spacing={4}
            p={6}
            borderRadius="xl"
            boxShadow="lg"
            bg="white"
          >
            <FormControl isRequired>
              <FormLabel>Nombre</FormLabel>
              <Input placeholder="Tu nombre" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="tu@email.com" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Mensaje</FormLabel>
              <Textarea placeholder="Escribí tu mensaje aquí..." />
            </FormControl>

            <Button className="btnEnviar" w="full">
              Enviar
            </Button>
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
}

export default Contacto;
