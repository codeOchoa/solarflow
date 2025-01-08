import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ItemCard } from "../index";
import {
    Box,
    Button,
    Flex,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    useColorModeValue
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useGetAllProducts } from "../../hooks/useGetAllProducts";

export const ItemListContainer = ({ products }) => {
    const { items } = useGetAllProducts("category");
    return (
        <Flex wrap={"wrap"} 
            width={"100%"} 
            justifyContent={"center"}>
            <Box width={"100%"}
                padding={"1%"}
                bg={useColorModeValue("gray.100", "gray.900")}
                >
                <Menu>
                    <MenuButton as={Button} 
                        rightIcon={<ChevronDownIcon />}>
                        Filtro
                    </MenuButton>
                    <MenuList height={"300px"} 
                        overflowY={"scroll"}>
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
                </Menu>
            </Box>
            {products.map((product) => {
                return <ItemCard key={product.id} data={product} />;
            })}
        </Flex>
    );
};