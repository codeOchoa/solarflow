import { Box, Container, Heading, Text, Button, Image } from "@chakra-ui/react";
import Link from "next/link";
import { ArrowBackIcon } from "@chakra-ui/icons";

export default function Custom404() {
  return (
    <Box as="main" py={10} textAlign="center">
      <Container maxW="container.md">
        <Link href="/" passHref>
          <a>
            <Image
              src="/assets/img/logoimg.png"
              alt="Logo"
              boxSize="100px"
              mb={6}
              mx="auto"
              cursor="pointer"
            />
          </a>
        </Link>
        <Heading as="h1" size="2xl" mb={4}>
          404
        </Heading>
        <Heading as="h2" size="lg" mb={6} color="gray.600">
          Page Not Found
        </Heading>
        <Link href="/" passHref>
          <Button colorScheme="teal" leftIcon={<ArrowBackIcon />} mt={4}>
            Go Home
          </Button>
        </Link>
        <Text fontSize="sm" color="gray.500" mt={10}>
          &copy; 2024 Malec. Todos los derechos reservados.
        </Text>
      </Container>
    </Box>
  );
}