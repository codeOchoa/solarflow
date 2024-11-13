import { useState } from 'react';
import { Input, Textarea, Button, Box, Container, Flex, Heading, Icon, Link, VStack } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaDribbble, FaGoogle, FaPinterest } from 'react-icons/fa';
import { BiHouse, BiPhone, BiGlobe, BiEnvelope } from 'react-icons/bi';

export default function ContactPage() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('success'); // Cambiar según lógica de envío
  };

  return (
    <main className="py-8">
      <Container maxW="6xl">
        <Flex direction={{ base: 'column', md: 'row' }} className="space-y-8 md:space-y-0">
          {/* Contact Form */}
          <Box w="full" maxW="md" mx="auto" as="form" onSubmit={handleSubmit}>
            <VStack spacing={4} align="stretch">
              <Heading as="h2" size="lg" className="text-gray-800">Contact Us</Heading>

              <Input placeholder="Su Nombre" variant="filled" id="name" name="name" />
              <Input placeholder="Tu correo electrónico" variant="filled" id="email" name="email" type="email" />
              <Input placeholder="Asunto" variant="filled" id="subject" name="subject" />
              <Textarea placeholder="Mensaje" variant="filled" id="message" name="message" rows={6} />

              {status === 'success' && <Box color="green.500">Gracias. El mensaje se envió correctamente.</Box>}
              {status === 'error' && <Box color="red.500">Error. Inténtalo más tarde.</Box>}

              <Button colorScheme="teal" type="submit">Enviar</Button>
            </VStack>
          </Box>

          {/* Contact Details */}
          <Box w="full" maxW="md" mx="auto" textAlign="center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d786.2031768013453!2d-57.566983730341704!3d-37.981499998245866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584d94366ac25bd%3A0xfd26c6fc204aff1a!2sAv.%20Libertad%204999%2C%20B7600HKH%20Mar%20del%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1722429766169!5m2!1ses-419!2sar"
              width="100%"
              height="300"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
            ></iframe>

            <VStack mt={4} spacing={2}>
              <Flex align="center">
                <Icon as={BiHouse} mr={2} />
                <span>Parque Luro, Mar del Plata, Buenos Aires, Argentina</span>
              </Flex>
              <Flex align="center">
                <Icon as={BiPhone} mr={2} />
                <span>Phone: +54-11-512-3456</span>
              </Flex>
              <Flex align="center">
                <Icon as={BiGlobe} mr={2} />
                <span>Fax: +54-11-512-3456</span>
              </Flex>
              <Flex align="center">
                <Icon as={BiEnvelope} mr={2} />
                <span>Email: hello@example.com</span>
              </Flex>
            </VStack>

            <Flex mt={4} justifyContent="center" className="space-x-4">
              <Link href="https://www.facebook.com/example" isExternal>
                <Icon as={FaFacebook} boxSize={6} />
              </Link>
              <Link href="https://www.twitter.com/example" isExternal>
                <Icon as={FaTwitter} boxSize={6} />
              </Link>
              <Link href="https://example.com/" isExternal>
                <Icon as={FaDribbble} boxSize={6} />
              </Link>
              <Link href="https://example.com/" isExternal>
                <Icon as={FaGoogle} boxSize={6} />
              </Link>
              <Link href="https://example.com/" isExternal>
                <Icon as={FaPinterest} boxSize={6} />
              </Link>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </main>
  );
}