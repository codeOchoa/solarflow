import { Box, Button, Text, Heading, Image, Stack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const images = [
  { src: '/assets/img/carousel01.jpg', alt: 'Taza', caption: 'Crea momentos especiales' },
  { src: '/assets/img/carousel02.jpg', alt: 'Taza', caption: 'Crea momentos especiales' },
  { src: '/assets/img/carousel03.jpg', alt: 'Taza', caption: 'Crea momentos especiales' },
  { src: '/assets/img/carousel04.jpg', alt: 'Taza', caption: 'Crea momentos especiales' },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <Box position="relative" overflow="hidden" maxW="full">
      {/* Indicators */}
      <Stack direction="row" spacing={2} position="absolute" bottom={4} left="50%" transform="translateX(-50%)" zIndex={2}>
        {images.map((_, index) => (
          <Button
            key={index}
            size="xs"
            borderRadius="full"
            bg={currentIndex === index ? 'white' : 'gray.600'}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </Stack>

      {/* Carousel images */}
      {images.map((image, index) => (
        <Box
          as={motion.div}
          key={index}
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          opacity={currentIndex === index ? 1 : 0}
          transition="opacity 0.8s"
          display={currentIndex === index ? 'block' : 'none'}
        >
          <Image src={image.src} alt={image.alt} objectFit="cover" width="100%" height="100%" />
          <Box position="absolute" bottom="20%" left="50%" transform="translateX(-50%)" textAlign="center" color="white">
            <Text fontSize="lg" fontWeight="medium" mb={2} as={motion.p} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              Productos
            </Text>
            <Heading fontSize="2xl" fontWeight="bold" mb={4} as={motion.h5} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
              {image.caption}
            </Heading>
            <Button
              as={motion.a}
              href="/pages/product.html"
              colorScheme="teal"
              size="lg"
              mt={2}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Comprar ahora
            </Button>
          </Box>
        </Box>
      ))}

      {/* Navigation buttons */}
      <Button
        onClick={handlePrev}
        position="absolute"
        top="50%"
        left={4}
        transform="translateY(-50%)"
        colorScheme="teal"
        zIndex={2}
        aria-label="Previous Slide"
      >
        <FaChevronLeft />
      </Button>
      <Button
        onClick={handleNext}
        position="absolute"
        top="50%"
        right={4}
        transform="translateY(-50%)"
        colorScheme="teal"
        zIndex={2}
        aria-label="Next Slide"
      >
        <FaChevronRight />
      </Button>
    </Box>
  );
};

export default Carousel;