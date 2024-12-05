import { Link } from "react-router-dom";

import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Text,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, ChevronDownIcon } from "@chakra-ui/icons";

import { useGetAllCategories } from "../../hooks/useGetAllCategories";

import { CartWidget } from "../index";

export const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const { categories } = useGetAllCategories();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Link to="/">
                <Text as="span" fontWeight="bold">Solar</Text>Flow
            </Link>
          </Box>

          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Categorias
            </MenuButton>
            <MenuList height={"300px"} overflowY={"scroll"}>
              {categories.map((category) => {
                return (
                  <MenuItem key={category.slug}>
                    <Link to={`/category/${category.slug}`}>
                      {category.name}
                    </Link>
                  </MenuItem>
                );
              })}
            </MenuList>
          </Menu>

          <Flex alignItems={"center"}>
            <CartWidget />
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
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
                  <MenuItem>Configuración</MenuItem>
                  <MenuItem>Cerrar Sesión</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
