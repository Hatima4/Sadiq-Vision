import React from "react";
import { Box, HStack, VStack, Text, Circle } from "@chakra-ui/react";

const Team = () => {
  return (
    <Box
      height="100vh"
      bgGradient="linear(to-b, #ffffff, #f0f0f0)"
    >
      <Box textAlign="center" pt="50px">
        <Text color="black" fontWeight="bold" fontSize="5xl">
          Team
        </Text>
      </Box>

      {/* Team Members */}
      <HStack
       
        paddingTop="20px"
        spacing={8} 
        justify="center" 
      >
        {/* Qasim */}
        <VStack align="center">
          <Circle size="200px" border="3px solid black" />
          <Text color="black" fontWeight="bold" fontSize="3xl">
            Qasim
          </Text>
          <Text color="grey" fontWeight="bold" fontSize="xl">
            NGO Owner
          </Text>
          <Text color="grey" fontSize="sm" textAlign="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
          </Text>
        </VStack>

        {/* Shrey */}
        <VStack align="center">
          <Circle size="200px" border="3px solid black" />
          <Text color="black" fontWeight="bold" fontSize="3xl">
            Shrey
          </Text>
          <Text color="grey" fontWeight="bold" fontSize="xl">
            Web Developer
          </Text>
          <Text color="grey" fontSize="sm" textAlign="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulumdadjaisdjasioudjasodashjoudas
          </Text>
        </VStack>

        {/* Hatim */}
        <VStack align="center">
          <Circle size="200px" border="3px solid black" />
          <Text color="black" fontWeight="bold" fontSize="3xl">
            Hatim
          </Text>
          <Text color="grey" fontWeight="bold" fontSize="xl">
            Web Developer
          </Text>
          <Text color="grey" fontSize="sm" textAlign="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
          </Text>
        </VStack>
      </HStack>
    </Box>
  );
};

export default Team;
