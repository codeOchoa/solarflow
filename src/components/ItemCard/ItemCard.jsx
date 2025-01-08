import { Link } from "react-router-dom";
import { useState } from "react";
import {
    Badge,
    Box,
    Circle,
    chakra,
    Icon,
    Image,
    Flex,
    Tooltip,
    Skeleton,
    useColorModeValue,
} from '@chakra-ui/react'

export const ItemCard = ({ data }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    return (
        <Link to={`/item/${data.id}`}>
            <Flex p={3}
                w="full" 
                alignItems="center" 
                justifyContent="center">
                <Box
                    bg={useColorModeValue('white', 'gray.800')}
                    maxW="sm"
                    borderWidth="1px"
                    rounded="lg"
                    shadow="lg"
                    position="relative">
                    {data.isNew && (
                        <Circle size="10px" 
                            position="absolute" 
                            top={2} 
                            right={2} 
                            bg="red.200" />
                    )}
                    <Box position="relative">
                        <Skeleton isLoaded={isLoaded}>
                            <Box height={!isLoaded ? "300px" : "auto"}>
                                <Image boxSize='300px'
                                    objectFit='cover'
                                    src={data.thumbnail} 
                                    alt={`Picture of ${data.name}`} 
                                    roundedTop="lg" 
                                    onLoad={() => setIsLoaded(true)}/>
                            </Box>
                        </Skeleton>
                    </Box>
                    <Box p="6">
                        <Box display="flex" 
                            alignItems="baseline">
                            {data.isNew && (
                                <Badge rounded="full" 
                                    px="2" 
                                    fontSize="0.8em" 
                                    colorScheme="red">
                                    New
                                </Badge>
                            )}
                        </Box>
                        <Flex mt="1" 
                            justifyContent="space-between" 
                            alignContent="center">
                            <Box
                                fontSize="2xl"
                                fontWeight="semibold"
                                as="h4"
                                lineHeight="tight"
                                isTruncated>
                                {data.title}
                            </Box>
                        </Flex>
                        <Flex justifyContent="space-between" 
                            alignContent="center">
                            <Box fontSize="2xl" 
                                color={useColorModeValue('gray.800', 'white')}>
                                <Box as="span" 
                                    color={'gray.600'} 
                                    fontSize="lg">
                                    $
                                </Box>
                                <Box as="span" 
                                    fontWeight="bold"> 
                                    {data.price.toFixed(2)}  
                                </Box> USD
                            </Box>
                        </Flex>
                    </Box>
                </Box>
            </Flex>
        </Link>
    )
}