import { Box, Container, Divider, Flex, Heading, Link, Stack, Text } from '@chakra-ui/react';
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box as="footer" bg="gray.800" color="white" py={8}>
      <Container maxW="container.lg">
        {/* Sección de enlaces */}
        <Stack spacing={8} mt={5}>
          <Flex justify="center" pt={5}>
            <Link href="#!" fontWeight="bold" textTransform="uppercase" mx={4}>
              Inicio
            </Link>
            <Link href="/pages/product.html" fontWeight="bold" textTransform="uppercase" mx={4}>
              Productos
            </Link>
            <Link href="/pages/about.html" fontWeight="bold" textTransform="uppercase" mx={4}>
              ¿Quienes somos?
            </Link>
            <Link href="/pages/contact.html" fontWeight="bold" textTransform="uppercase" mx={4}>
              Contacto
            </Link>
          </Flex>
        </Stack>

        <Divider my={5} borderColor="gray.600" />

        {/* Descripción */}
        <Stack spacing={5} mb={5} textAlign="center">
          <Text maxW="lg" mx="auto">
            Empresa especializada en cerámica, velas de soja aromáticas y con el mejor precio y calidad del mercado.
          </Text>
        </Stack>

        {/* Redes sociales */}
        <Flex justify="center" mb={5}>
          <Link href="https://www.facebook.com/profile.php?id=100091698780289" mx={2}>
            <FaFacebookF />
          </Link>
          <Link href="https://x.com/PabloDKx" mx={2}>
            <FaTwitter />
          </Link>
          <Link href="https://www.google.com.ar/" mx={2}>
            <FaGoogle />
          </Link>
          <Link href="https://www.instagram.com/malec_velas/" mx={2}>
            <FaInstagram />
          </Link>
          <Link href="https://www.linkedin.com/in/pablo-ochoa-0b9428301/" mx={2}>
            <FaLinkedin />
          </Link>
          <Link href="https://github.com/codeOchoa" mx={2}>
            <FaGithub />
          </Link>
        </Flex>

        {/* Derechos de autor y enlace de defensa del consumidor */}
        <Box textAlign="center" p={3} borderTop="1px" borderColor="gray.600">
          <Text>&copy; 2024 Copyright: Malec. Todos los derechos reservados.</Text>
          <Text>
            Defensa de las y los consumidores. Para reclamos{' '}
            <Link color="blue.400" href="https://www.argentina.gob.ar/produccion/defensadelconsumidor/formulario" isExternal>
              ingrese aquí
            </Link>
          </Text>
          <Link color="blue.400" href="https://kissaccesorios.empretienda.com.ar/" isExternal>
            Test
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;