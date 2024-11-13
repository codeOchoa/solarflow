import { Box, Container, Heading, Text, Button, Image, Badge, VStack, HStack } from "@chakra-ui/react";
import Link from "next/link";
import { StarIcon } from "@chakra-ui/icons";

export default function FeaturedProducts() {
  const products = [
    {
      id: "art0001",
      title: "Taza 250cc + Tabla de Madera",
      imageUrl: "/assets/img/table01tn.jpg",
      price: 5.56,
      link: "/art0001",
      oldPrice: null,
      sale: false,
    },
    {
      id: "art0002",
      title: "Taza 325cc Diseño",
      imageUrl: "/assets/img/forest01tn.jpg",
      price: 5.49,
      oldPrice: 6.49,
      link: "/art0002",
      sale: true,
    },
    {
      id: "art0003",
      title: "Pocillo 150cc Expreso Porcelana Gastronómica",
      imageUrl: "/assets/img/flower01tn.jpg",
      price: 1.37,
      oldPrice: 2.37,
      link: "/art0003",
      sale: true,
    },
  ];

  return (
    <Box as="section" py={10} bg="gray.50">
      <Heading as="h4" size="md" fontWeight="bold" px={{ base: 4, lg: 10 }} mb={8}>
        Productos destacados
      </Heading>
      <Container maxW="container.xl">
        <HStack spacing={8} wrap="wrap" justify="center">
          {products.map((product) => (
            <Box
              key={product.id}
              borderWidth="1px"
              rounded="lg"
              shadow="lg"
              position="relative"
              width={{ base: "100%", md: "48%", lg: "23%" }}
              bg="white"
            >
              {product.sale && (
                <Badge position="absolute" top={2} right={2} colorScheme="red">
                  Sale
                </Badge>
              )}
              <Link href={product.link}>
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  roundedTop="lg"
                  width="100%"
                  height="200px"
                  objectFit="cover"
                  cursor="pointer"
                />
              </Link>
              <Box p={4}>
                <VStack spacing={2} align="center">
                  <Link href={product.link} passHref>
                    <Text fontWeight="bold" as="h5" fontSize="lg" color="gray.800" noOfLines={2}>
                      {product.title}
                    </Text>
                  </Link>
                  <HStack spacing={1} color="yellow.500">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} />
                    ))}
                  </HStack>
                  <Text fontSize="lg" color="gray.800">
                    {product.oldPrice && (
                      <Text as="span" color="gray.500" textDecoration="line-through" mr={2}>
                        ${product.oldPrice}
                      </Text>
                    )}
                    ${product.price}
                  </Text>
                </VStack>
              </Box>
              <Box p={4} pt={0} textAlign="center">
                <Button colorScheme="teal" mt="auto" as="a" href="/cart">
                  Agregar al carrito
                </Button>
              </Box>
            </Box>
          ))}
        </HStack>
      </Container>
    </Box>
  );
}