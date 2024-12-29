import { Flex } from "@chakra-ui/react";
import { ItemCard } from "../index";
// import { useGetAllProducts } from "../../hooks/useGetAllProducts";

// const { items } = useGetAllProducts("categories");

export const ItemListContainer = ({ products }) => {
    return (
        // <Menu>
        //     <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        //         Categorias
        // </MenuButton>
        // <MenuList height={"300px"} overflowY={"scroll"}>
        //     {items.map((category) => {
        //     return (
        //         <MenuItem key={category.slug}>
        //             <Link to={`/category/${category.slug}`}>
        //             {category.name}
        //             </Link>
        //         </MenuItem>
        //     );
        //     })}
        // </MenuList>
        // </Menu>
    <Flex wrap={"wrap"} width={"100%"} justifyContent={"center"}>
        {products.map((product) => {
            return <ItemCard key={product.id} data={product} />;
        })}
    </Flex>
    );
};