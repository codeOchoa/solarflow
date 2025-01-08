import { useContext } from "react";
import { Link } from "react-router-dom";
import { 
    Badge,
    Box,
    Flex,
    HStack } from "@chakra-ui/react";
import { LuShoppingCart } from "react-icons/lu";
import { CartContext } from "../../context";

export const CartWidget = () => {
    const { cartState } = useContext(CartContext);
    const totalItems = cartState.reduce((aux, item) => aux + item.qtyCartItem, 0);

    return (
        <Link to="/checkout">
            <Flex
                alignItems={"center"}
                justifyContent={"center"}
                pt={"1.5"}>
                <HStack spacing="2px">
                    <Box display="flex" 
                        alignItems="center" 
                        justifyContent="center">
                        <LuShoppingCart size={20} />
                    </Box>
                    <Badge rounded="full" 
                        fontSize="0.8em" 
                        colorScheme="red">
                        {totalItems}
                    </Badge>
                </HStack>
            </Flex>
        </Link>
    );
};