import React from "react";
import { Box, Heading, Image, Text, Button } from "@chakra-ui/react";
import { easeInOut } from "framer-motion";

const Welcome_Page = () => {
  return (
    <Box
      backgroundSize="cover"
      backgroundPosition="center"
      height="100vh"
      position="relative"
    >
      {/* Glasses image section */}
      <Box
        justifyContent="center"
        display="flex"
        alignItems="center"
        height="80vh"
      >
        <Image
          src="glasses.svg"
          alt="Glasses Image"
          h="400px"
          w="400px"
          stroke="black"
          filter="drop-shadow(0px 0px 5px rgba(255,0,0))"
          _hover={{
            filter: "drop-shadow(0px 0px 10px rgba(255, 0, 0, 1))",
            transition: easeInOut(2),
          }}
        />

        {/* Welcome text, positioned over the image */}
        <Text
          fontSize="4xl"
          fontWeight="bold"
          color="black"
          position="absolute"
          bottom="190px" // Adjust the position for better fit
          textShadow="0px 0px 10px rgba(0, 0, 0, 0.8)"
        >
          Welcome to our vision
        </Text>
      </Box>

      <Box position="absolute" bottom="60px" width="100%" textAlign="center">
        <Text
          color="gray" // Change text color to gray
          fontWeight="bold"
          fontSize="16px"
        >
          Learn More
        </Text>
      </Box>
    </Box>
  );
};

export default Welcome_Page;
