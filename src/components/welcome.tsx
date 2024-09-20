import React from "react";
import { Box, Heading } from "@chakra-ui/react";

const Welcome_Page = () => {
  return (
      <Heading
        as="h1"           // Use as <h1>
        size="4xl"         // Font size (extra-large)
        color="black.500"  // Text color (teal)f
        display = "flex"
        margin = "180px auto"
        marginLeft= "200px"
      >
        Welcome to
      </Heading>
    
  );
};

export default Welcome_Page;
