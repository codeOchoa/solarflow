import { Link } from "react-router-dom";
import {
    Box,
    Flex,
    Avatar,
    Button,
    Center,
    Collapse,
    Icon,
    IconButton,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    Popover,
    PopoverTrigger,
    PopoverContent,
    Stack,
    Text,
    useBreakpointValue,
    useColorMode,
    useColorModeValue,
    useDisclosure
} from "@chakra-ui/react";
import {
    ChevronRightIcon,
    ChevronDownIcon,
    CloseIcon,
    HamburgerIcon,
    MoonIcon,
    SunIcon
} from "@chakra-ui/icons";
import { CartWidget } from "../index";
// import { createProductsFirestore } from "../../helpers";

const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
    return (
        <Stack
            direction={'row'}
            spacing={4}
            alignItems={"center"}>
            {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label}>
                    <Popover trigger={'hover'}
                        placement={'bottom-start'}>
                        <PopoverTrigger>
                            <Box as="a"
                                p={2}
                                href={navItem.href ?? '#'}
                                fontSize={'sm'}
                                fontWeight={500}
                                color={linkColor}
                                _hover={{ textDecoration: 'none', color: linkHoverColor, }}> {navItem.label}
                            </Box>
                        </PopoverTrigger> {navItem.children && (
                            <PopoverContent border={0}
                                boxShadow={'xl'}
                                bg={popoverContentBgColor}
                                p={4}
                                rounded={'xl'}
                                minW={'sm'}>
                                <Stack> {navItem.children.map((child) => (
                                    <DesktopSubNav key={child.label} {...child} />))}
                                </Stack>
                            </PopoverContent>)}
                    </Popover>
                </Box>
            ))}
        </Stack>
    )
};
const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
        <Box as="a"
            href={href}
            role={'group'}
            display={'block'}
            p={2} rounded={'md'}
            _hover={{ bg: useColorModeValue('#F2FFE9', 'gray.900') }}>
            <Stack direction={'row'}
                align={'center'}>
                <Box>
                    <Text transition={'all .3s ease'}
                        _groupHover={{ color: '#3A6351' }}
                        fontWeight={500}> {label}
                    </Text>
                    <Text fontSize={'sm'}>{subLabel}</Text>
                </Box>
                <Flex transition={'all .3s ease'}
                    transform={'translateX(-10px)'}
                    opacity={0}
                    _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
                    justify={'flex-end'}
                    align={'center'}
                    flex={1}>
                    <Icon color={'#3A6351'}
                        w={5}
                        h={5}
                        as={ChevronRightIcon} />
                </Flex>
            </Stack>
        </Box>
    )
};
const MobileNav = () => {
    return (
        <Stack bg={useColorModeValue('white', 'gray.800')}
            p={4}
            display={{ md: 'none' }}> {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
        </Stack>
    );
};
const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();
    return (
        <Stack spacing={4}
            onClick={children && onToggle}>
            <Box py={2}
                as="a"
                href={href ?? '#'}
                justifyContent="space-between"
                alignItems="center"
                _hover={{ textDecoration: 'none', }}>
                <Text fontWeight={600}
                    color={useColorModeValue('gray.600', 'gray.200')}> {label}
                </Text> {children && (<Icon as={ChevronDownIcon}
                    transition={'all .25s ease-in-out'}
                    transform={isOpen ? 'rotate(180deg)' : ''}
                    w={6}
                    h={6} />)}
            </Box>
            <Collapse in={isOpen}
                animateOpacity style={{ marginTop: '0!important' }}>
                <Stack mt={2}
                    pl={4}
                    borderLeft={1}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.700')}
                    align={'start'}> {children && children.map((child) => (
                        <Box as="a"
                            key={child.label}
                            py={2}
                            href={child.href}> {child.label}
                        </Box>))}
                </Stack>
            </Collapse>
        </Stack>
    );
};
export const NavBar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Box>
            <Flex bg={useColorModeValue('white', 'gray.800')}
                color={useColorModeValue('gray.600', 'white')}
                minH={'60px'}
                h={16}
                py={{ base: 2 }}
                px={{ base: 5 }}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                align={'center'}
                justifyContent={"space-between"}>
                <Flex flex={{ base: 1, md: 'auto' }}
                    ml={{ base: -2 }}
                    display={{ base: 'flex', md: 'none' }}>
                    <IconButton onClick={onToggle}
                        icon={isOpen ?
                            <CloseIcon w={3}
                                h={3} /> :
                            <HamburgerIcon w={5}
                                h={5} />}
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'} />
                </Flex>
                <Flex flex={{ base: 1 }}
                    justify={{ base: 'center', md: 'start' }}>
                    <Link to="/">
                        <Text as={"span"}
                            color={useColorModeValue('gray.800', 'white')}
                            fontFamily={'heading'}
                            fontSize={"2xl"}
                            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}>
                            <Text as={"span"}
                                fontWeight={"bold"}>Solar</Text>Flow</Text>
                    </Link>
                    <Flex display={{ base: 'none', md: 'flex' }}
                        ml={10}>
                        <DesktopNav />
                    </Flex>
                </Flex>
                {/* <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                        Categorias
                    </MenuButton>
                    <MenuList height={"300px"} overflowY={"scroll"}>
                        {items.map((category) => {
                            return (
                                <MenuItem key={category.slug}>
                                    <Link to={`/category/${category.slug}`}>
                                        {category.name}
                                    </Link>
                                </MenuItem>
                            );
                        })}
                    </MenuList>
                </Menu> */}
                {/* <Button onClick={()=> createProductsFirestore("products")}>Export Items DEV</Button> */}
                <Stack flex={{ base: 1, md: 0 }}
                    justify={'flex-end'}
                    direction={'row'}
                    spacing={6}>
                    <Stack direction={"row"} spacing={7}>
                        {/* <Button onClick={toggleColorMode}>
                            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                        </Button> */}
                        <CartWidget />
                        <Menu>
                            <MenuButton
                                as={Button}
                                rounded={"full"}
                                variant={"link"}
                                cursor={"pointer"}
                                minW={0}
                            >
                                <Avatar
                                    bg={"teal.500"}
                                    name={"Pablo Ochoa"}
                                    size={"sm"}
                                    src={"https://bit.ly/broken-link"}
                                />
                            </MenuButton>
                            <MenuList alignItems={"center"}>
                                <br />
                                <Center>
                                    <Avatar
                                        bg={"teal.500"}
                                        name={"Pablo Ochoa"}
                                        size={"2xl"}
                                        src={"https://bit.ly/broken-link"}
                                    />
                                </Center>
                                <br />
                                <Center>
                                    <p>Pablo Ochoa</p>
                                </Center>
                                <br />
                                <MenuDivider />
                                <MenuItem as={'a'}
                                    fontSize={'sm'}
                                    fontWeight={400}
                                    variant={'link'}
                                    _hover={{ bg: useColorModeValue('#F2FFE9', 'gray.900') }}
                                    href={'#'}>Configuración</MenuItem>
                                <MenuItem as={'a'}
                                    // display={{ base: 'none', md: 'inline-flex' }}
                                    fontSize={'sm'}
                                    fontWeight={400}
                                    _hover={{ bg: useColorModeValue('#F2FFE9', 'gray.900') }}
                                    href={'#'}>Cerrar Sesión</MenuItem>
                            </MenuList>
                        </Menu>
                    </Stack>
                </Stack>
            </Flex>
            <Collapse in={isOpen}
                animateOpacity>
                <MobileNav />
            </Collapse>
        </Box>
    );
};
const NAV_ITEMS = [
    {
        label: 'Productos',
        href: '#',
    },
    {
        label: 'Servicios',
        href: '#',
    },
    {
        label: 'Descubrir',
        children: [
            {
                label: 'Acerca de SolarFlow',
                subLabel: 'Todo sobre nosotros',
                href: '#',
            },
            {
                label: 'Aplicación Inteligente',
                subLabel: 'Gestiona tu energía en la App',
                href: '#',
            },
            {
                label: 'Videos de productos',
                subLabel: 'Conoce mas de cerca nuestros productos',
                href: '#',
            },
            {
                label: 'Centro de descargas',
                subLabel: 'Manuales y aplicaciones de nuestros productos',
                href: '#',
            },
            {
                label: 'Soporte',
                subLabel: 'FAQ y Tickets',
                href: '#',
            },
            {
                label: 'Blogs',
                subLabel: 'Ultimas noticias',
                href: '#',
            },
            {
                label: 'Canal de YouTube',
                subLabel: 'Ultimas novedades con todos los detalles',
                href: '#',
            },
        ],
    },
];