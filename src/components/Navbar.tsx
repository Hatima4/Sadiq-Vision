import React from "react";
import { Box, Flex, Button, Text, HStack } from "@chakra-ui/react";
import { EmailIcon, AddIcon } from "@chakra-ui/icons";

const Navbar = () => {
  return (
    <Box bg="transparent" position="fixed" top="0" width="100%" zIndex="999" backdropFilter="blur(3px)" >
      <Flex
        as="nav"
        alignItems="center"
        padding="20px"
        bg="transparent"
        color="white"
      >
        {/* Left-aligned "Sadiq Vision" */}
        <Text fontWeight="bold" fontSize="24px">
          Sadiq Vision
        </Text>

        {/* Center the remaining items */}
        <Flex flex="1" justifyContent="center">
          <HStack spacing="60px" direction= "row">
            <Text fontWeight="bold" fontSize="24px">
              Home
            </Text>
            <Text fontWeight="bold" fontSize="24px">
              About
            </Text>
            <Text fontWeight="bold" fontSize="24px">
              Contact Us
            </Text>
            <Text fontWeight="bold" fontSize="24px">
              Team
            </Text>
            
            <Button
              leftIcon = {<AddIcon/>}
              fontWeight="bold"
              fontSize="24px"
              colorScheme="white"
              variant="outline"
              
            >
              Donate
            </Button>
            <Button 
            fontWeight = "bold"
            fontSize = "24px"
            
            leftIcon = {<EmailIcon/>} bg = "transparent" colorScheme = "white" variant = "outline"> Email</Button>
          </HStack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
