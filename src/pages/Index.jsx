import React, { useState } from "react";
import { Box, Heading, Text, Image, Grid, Button, Flex, useColorModeValue } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const hoodies = [
  {
    id: 1,
    name: "Nebula Hoodie",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1623538973749-b3422f7c089b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxuZWJ1bGElMjBzcGFjZSUyMGhvb2RpZXxlbnwwfHx8fDE3MTMwNDY4Njd8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    name: "Astronaut Hoodie",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1484589065579-248aad0d8b13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhc3Ryb25hdXQlMjBpbiUyMHNwYWNlJTIwaG9vZGllfGVufDB8fHx8MTcxMzA0Njg2OHww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    name: "Cosmic Hoodie",
    price: 44.99,
    image: "https://images.unsplash.com/photo-1446776709462-d6b525c57bd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMHNwYWNlJTIwZ2FsYXh5JTIwaG9vZGllfGVufDB8fHx8MTcxMzA0Njg2OHww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 4,
    name: "Starry Night Hoodie",
    price: 54.99,
    image: "https://images.unsplash.com/photo-1628498188873-579210ce622e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzdGFycnklMjBuaWdodCUyMHNreSUyMGhvb2RpZXxlbnwwfHx8fDE3MTMwNDY4Njl8MA&ixlib=rb-4.0.3&q=80&w=1080",
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
            <Image src={hoodie.image} alt={hoodie.name} mb={4} />
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
