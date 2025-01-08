import {
    Box,
    chakra,
    Container,
    Flex,
    IconButton,
    Image,
    Input,
    SimpleGrid,
    Spacer,
    Stack,
    Text,
    VisuallyHidden,
    useColorModeValue
} from '@chakra-ui/react'
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { BiMailSend } from 'react-icons/bi'

const Logo = props => {
    const fillColor = useColorModeValue("gray.900", "gray.100");
    return (
        <svg width="10.8372mm" height="10.8372mm" viewBox="0 0 1083.72 1083.72" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path class="fil0" fill={fillColor} d="M999.8 1028.13c112.44,-89.42 -66.98,-300.66 -106.26,-333.53 -117.59,-98.44 -584.78,-73.49 -745.77,-503.19 -26.9,-71.79 -21.44,-125.87 -100.05,-153.32 -24.26,232.32 177.23,452.79 404.58,559.92 226.91,106.93 452.69,38.1 505.1,342.23 2.71,73.89 1.35,97.84 42.4,87.89z" />
            <path class="fil0" fill={fillColor} d="M843.71 1038.08c-41.21,-270.64 -356.21,-177.31 -639.76,-434.48 -169.53,-153.75 -107.74,-173.36 -182.43,-161.01 4.68,117.17 227.01,286.49 345.54,344.88 147.79,72.79 287.33,62.95 373.91,163.61 58.14,67.59 16.78,82.35 102.74,87z" />
            <path class="fil0" fill={fillColor} d="M999.8 641.56c58.1,-133.24 -162.78,-249.43 -326.89,-283.72 -202.56,-42.33 -256.05,-144.95 -330.6,-239.11 -12.34,-39.06 -25.58,-54.76 -53.57,-35.77 -31.56,90.46 132.16,264.03 299.4,310.3 326.27,90.28 271.44,42.32 362.74,210.28 15.28,30.81 19.5,61.16 48.92,38.02z" />
            <path class="fil0" fill={fillColor} d="M538.13 1028.43c-25.42,-134.85 -226.23,-125.99 -375.4,-244.63 -97.57,-77.6 -38.41,-68.43 -122.2,-119.1 24.04,235.85 304.12,254.87 370.63,286.74 74.58,35.73 59.3,77.76 126.97,76.99z" />
            <path class="fil0" fill={fillColor} d="M1047.31 344.99c-36.23,-97.33 -93.77,-88.56 -182.93,-141.69 -84.57,-50.4 -99.04,-123.51 -159.41,-164.91 -39.1,75.43 66.48,163.81 115.43,191.73 35.32,20.16 87.5,33.93 122.27,51.14 86.94,43 15.94,56.1 104.64,63.73z" />
            <path class="fil0" fill={fillColor} d="M259.19 1032.92c-59.49,-81.52 -54.55,-30.92 -125.67,-81.64 -53.19,-37.94 -38.08,-45.61 -99.65,-79.78 2.89,91.83 115.81,142.21 225.32,161.42z" />
        </svg>
    )
}

const SocialButton = ({ children, label, href }) => {
    return (
        <chakra.button
            bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
            rounded="full"
            w={8}
            h={8}
            cursor="pointer"
            as="a"
            href={href}
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            transition="background 0.3s ease"
            _hover={{
                bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
            }}
        >
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

const ListHeader = ({ children }) => {
    return (
        <Text fontWeight="500" fontSize="lg" mb={2}>
            {children}
        </Text>
    );
};

export const Footer = () => {
    return (
        <Box
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}>
            <Container as={Stack} maxW={'6xl'} py={10}>
                <SimpleGrid
                    templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
                    spacing={8}>
                    <Stack spacing={6}>
                        <Box>
                            <Logo width={56}/>
                            <Flex>
                                <Box fontSize={'xs'}
                                    fontWeight={800}>
                                    Solar
                                </Box>
                                <Box fontSize={'xs'}
                                fontWeight={600}>
                                    Flow
                                </Box>
                            </Flex>
                        </Box>
                        <Text fontSize={'sm'}>© 2024 <Text as={'span'} fontWeight={'bold'}>Solar</Text>Flow. Todos los derechos reservados</Text>
                        <Stack direction={'row'} spacing={6}>
                            <SocialButton label={'Twitter'} href={'#'}>
                                <FaTwitter />
                            </SocialButton>
                            <SocialButton label={'YouTube'} href={'#'}>
                                <FaYoutube />
                            </SocialButton>
                            <SocialButton label={'Instagram'} href={'#'}>
                                <FaInstagram />
                            </SocialButton>
                        </Stack>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Comapañia</ListHeader>
                        <Box as="a" href={'#'}>
                            Sobre nosotros
                        </Box>
                        <Box as="a" href={'#'}>
                            Blog
                        </Box>
                        <Box as="a" href={'#'}>
                            Contáctenos
                        </Box>
                        <Box as="a" href={'#'}>
                            Precios
                        </Box>
                        <Box as="a" href={'#'}>
                            Testimonios
                        </Box>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Soporte</ListHeader>
                        <Box as="a" href={'#'}>
                            Centro de ayuda
                        </Box>
                        <Box as="a" href={'#'}>
                            Términos y condiciones
                        </Box>
                        <Box as="a" href={'#'}>
                            Legal
                        </Box>
                        <Box as="a" href={'#'}>
                            Política de privacidad
                        </Box>
                        <Box as="a" href={'#'}>
                            Satus
                        </Box>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Newsletter</ListHeader>
                        <Stack direction={'row'}>
                            <Input
                                placeholder={'Su correo electrónico'}
                                bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                                border={0}
                                _focus={{
                                    bg: 'whiteAlpha.300',
                                }}
                            />
                            <IconButton
                                bg={useColorModeValue('green.400', 'green.800')}
                                color={useColorModeValue('white', 'gray.800')}
                                _hover={{
                                    bg: 'green.600',
                                }}
                                aria-label="Suscribirse"
                                icon={<BiMailSend />}
                            />
                        </Stack>
                    </Stack>
                </SimpleGrid>
            </Container>
        </Box>
    )
}