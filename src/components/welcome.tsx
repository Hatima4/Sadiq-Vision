import React from "react";
import { Box, Heading, Image, Text, Button } from "@chakra-ui/react";

const Welcome_Page = () => {
  return (
    <Box
      backgroundImage="url('background.png')"
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
        <Image src="glasses.png" alt="Glasses Image" h="400px" w="400px" />
        
        {/* Welcome text, positioned over the image */}
        <Text
          fontSize="4xl"
          fontWeight="bold"
          color="white"
          position="absolute"
          bottom="190px"  // Adjust the position for better fit
          textShadow="0px 0px 10px rgba(0, 0, 0, 0.8)"
        >
          Welcome to our vision
        </Text>
      </Box>

      {/* Button section */}
      <Box position = "absolute" bottom="60px" width="100%" textAlign="center">
        <Button 
          color="white"  // Change text color to white
          borderColor="white"  // Add white border for the outline variant
          variant="outline"
          fontWeight="bold"
          fontSize="24px"
        >
          Scroll Down
        </Button>
      </Box>
    </Box>
  );
};

export default Welcome_Page;
