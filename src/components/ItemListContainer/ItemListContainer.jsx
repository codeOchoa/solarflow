import { Flex } from "@chakra-ui/react";
import { ItemCard } from "../index";

export const ItemListContainer = ({ products }) => {
  return (
    <Flex wrap={"wrap"} width={"100%"} justifyContent={"center"}>
      {products.map((product) => {
        return <ItemCard key={product.id} data={product} />;
      })}
    </Flex>
  );
};
