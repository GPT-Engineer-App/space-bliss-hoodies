import React, { useState } from "react";
import { Box, Heading, Text, Grid, Button, Flex, useColorModeValue } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const hoodies = [
  {
    id: 1,
    name: "White Shirt",
    price: 49.99,
  },
  {
    id: 2,
    name: "Black Shirt",
    price: 59.99,
  },
  {
    id: 3,
    name: "Cream Shirt",
    price: 44.99,
  },
  {
    id: 4,
    name: "Starry Night Hoodie",
    price: 54.99,
  },
];

const Index = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (hoodie) => {
    setCart([...cart, hoodie]);
  };

  const bg = useColorModeValue("gray.100", "gray.900");
  const color = useColorModeValue("gray.800", "white");

  return (
    <Box bg={bg} color={color} minH="100vh" py={10}>
      <Flex justify="space-between" align="center" px={10} mb={10}>
        <Heading size="xl">Space Hoodies</Heading>
        <Button leftIcon={<FaShoppingCart />}>Cart ({cart.length})</Button>
      </Flex>
      <Grid templateColumns={["1fr", "repeat(2, 1fr)", "repeat(4, 1fr)"]} gap={8} px={10}>
        {hoodies.map((hoodie) => (
          <Box key={hoodie.id} borderWidth={1} borderRadius="lg" p={4}>
            <Heading size="md" mb={2}>
              {hoodie.name}
            </Heading>
            <Text fontSize="xl" fontWeight="bold" mb={4}>
              ${hoodie.price}
            </Text>
            <Button colorScheme="blue" onClick={() => addToCart(hoodie)} disabled={cart.includes(hoodie)}>
              {cart.includes(hoodie) ? "Added to Cart" : "Add to Cart"}
            </Button>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default Index;
