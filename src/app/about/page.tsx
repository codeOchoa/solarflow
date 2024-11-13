import { Box, Container, Flex, Heading, Image, Text, Button, SimpleGrid, Center } from "@chakra-ui/react";
import Link from "next/link";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { FaPlay } from "react-icons/fa";

export default function AboutPage() {
  return (
    <Box as="main">
      {/* Sección Acerca de */}
      <Box as="section" py={10}>
        <Container maxW="container.lg">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Image src="/assets/img/content01.jpg" alt="Acerca de" borderRadius="md" objectFit="cover" />
            <Box>
              <Heading as="h2" size="lg" mt={{ base: 4, md: 10 }}>Acerca de nuestra tienda</Heading>
              <Text mt={4}>
                Bienvenidos a nuestra tienda online, donde cada detalle cuenta y cada producto cuenta una historia.
                Somos apasionados por ofrecer artículos únicos que combinan diseño, calidad y funcionalidad.
                Nuestra selección incluye una amplia gama de tazas de cerámica, velas de soja artesanales y una variedad de accesorios cuidadosamente seleccionados.
                {/* Texto adicional */}
              </Text>
              <Link href="/contact" passHref>
                <Button colorScheme="teal" mt={6} rightIcon={<ExternalLinkIcon />}>Descargar perfil de la empresa</Button>
              </Link>
            </Box>
          </SimpleGrid>

          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={6} mt={10} textAlign="center">
            <Image src="/assets/icons/awards-logo01.svg" alt="Premio" boxSize="80px" mx="auto" />
            <Image src="/assets/icons/awards-logo02.svg" alt="Premio" boxSize="80px" mx="auto" />
            <Image src="/assets/icons/awards-logo03.svg" alt="Premio" boxSize="80px" mx="auto" />
            <Image src="/assets/icons/awards-logo04.svg" alt="Premio" boxSize="80px" mx="auto" />
          </SimpleGrid>
        </Container>
      </Box>

      {/* Sección de Miembros del Equipo */}
      <Box as="section" py={10} bg="gray.50">
        <Container maxW="container.lg">
          <Heading as="h2" size="lg" textAlign="center" mb={6}>Miembros del equipo</Heading>
          <SimpleGrid columns={{ base: 2, md: 4, lg: 5 }} spacing={8}>
            {teamMembers.map((member, index) => (
              <Box key={index} textAlign="center">
                <Image src={member.image} alt={member.name} boxSize="100px" borderRadius="full" mx="auto" />
                <Text fontWeight="bold" mt={4}>{member.name}</Text>
                <Text color="gray.600">{member.role}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Sección de Presentación */}
      <Box as="section" py={10} textAlign="center" bg="gray.100">
        <Container maxW="container.sm">
          <Heading as="h2" size="lg" mb={4}>Presentación</Heading>
          <Center>
            <Link href="https://www.youtube.com/watch?v=U7Pkzk6O2Nw&ab_channel=Marko" passHref>
              <Button size="lg" colorScheme="teal" leftIcon={<FaPlay />}>Ver Video</Button>
            </Link>
          </Center>
        </Container>
      </Box>
    </Box>
  );
}

const teamMembers = [
  { name: "Pablo Ochoa", role: "Founder", image: "/assets/img/team01.jpg" },
  { name: "Vicky Mondino", role: "Developer", image: "/assets/img/team02.jpeg" },
  { name: "Boris Riback", role: "Developer", image: "/assets/img/team03.png" },
  { name: "Oswald Villano", role: "Developer", image: "/assets/img/team04.png" },
  { name: "Alejandra Piñeros", role: "Graphic Designer", image: "/assets/img/team05.png" },
  { name: "Facundo Perez", role: "Developer", image: "/assets/img/team06.png" },
  { name: "Maxi Pardo", role: "Developer", image: "/assets/img/team07.png" },
];