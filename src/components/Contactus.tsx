import React from "react";
import { Text, Box, Heading, Input, Textarea, Button } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";

const Contactus = () => {
  return (
    <Box
      id="contact"
      background="white"
      backgroundSize="cover"
      backgroundPosition="center"
      height="100vh"
    >
      <Box
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        height="100vh"
        marginLeft="10%"
      >
        <Box
          width="30%" // Adjust the width as needed
          textAlign="left"
        >
          <Heading marginBottom="30px">Contact Us</Heading>
          <Text marginBottom="20px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </Text>
        </Box>
        <Box
          width="40%"
          display="flex"
          flexDirection="column"
          marginLeft="15%" // Moves the image to the right by adding margin
          marginTop="30px"
        >
          <Text fontWeight="bold" fontSize="24px" marginBottom="10px">
            Name:
          </Text>
          <Input placeholder="Enter Name" marginBottom="20px"></Input>
          <Text fontWeight="bold" fontSize="24px" marginBottom="10px">
            Email:
          </Text>
          <Input placeholder="Enter Email" marginBottom="20px"></Input>
          <Text fontWeight="bold" fontSize="24px" marginBottom="10px">
            Message:
          </Text>
          <Textarea
            placeholder="Enter message"
            height="300px"
            resize="none"
            textAlign="left"
            marginBottom="20px"
          ></Textarea>
          <Button
            colorScheme="white"
            variant="outline"
            width="200px"
            marginLeft="200px"
            leftIcon={<EmailIcon></EmailIcon>}
          >
            Send!
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Contactus;
