import React from "react";
import { Box, Heading, Image } from "@chakra-ui/react";
import { Box, Heading, Image } from "@chakra-ui/react";

const Welcome_Page = () => {
  return (
    <Box
      backgroundImage="url('background.png')"
      backgroundSize="cover"
      backgroundPosition="center"
      height="100vh"
    >
      <Box
        justifyContent="center"
        display="flex"
        alignItems="center"
        height="100vh"
      >
        <Image src="glasses.png" alt="Glasses Image" h="400px" w="400px" />
      </Box>
    </Box>
  );
};

export default Welcome_Page;
