import { Box, Text, Button, Image, Flex, Circle } from '@chakra-ui/react';
import React, { useState, useEffect } from "react";

const Welcome_Page = () => {
  const [activeSection, setActiveSection] = useState<string>("home");
  const handleScroll = () => {
    const scrollPos = window.scrollY;

    if (scrollPos < window.innerHeight) {
      setActiveSection("home");
    } else if (
      scrollPos >= window.innerHeight &&
      scrollPos < 2 * window.innerHeight
    ) {
      setActiveSection("about");
    } else if (
      scrollPos >= 2 * window.innerHeight &&
      scrollPos < 3 * window.innerHeight
    ) {
      setActiveSection("contact");
    } else if (
      scrollPos >= 3 * window.innerHeight &&
      scrollPos < 4 * window.innerHeight
    ) {
      setActiveSection("team");
    } else if (scrollPos >= 4 * window.innerHeight) {
      setActiveSection("donate");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      height="100vh"
      background="linear-gradient(to bottom, #ffffff, #f0f0f0)" // Subtle gradient background
      textAlign="center"
      display="flex"
      flexDirection="column"
    >
      {/* Flex container for Welcome Text and Glasses */}
      <Flex justifyContent="space-between" alignItems="center" height="80vh">
        
        {/* Welcome Text and Button */}
        <Box flex="1" paddingLeft="100px">  {/* Swapped to the left */}
          <Text fontSize="5xl" fontWeight="bold">
            Welcome to our vision
          </Text>

          <Text fontSize="lg" color="gray.500" fontStyle="italic" mt={2}>
            Because all vision matters
          </Text>

          <Button
            mt={6}
            colorScheme="teal"
            size="lg"
            fontWeight="bold"
            borderRadius="lg"
            
          >
            Learn More
          </Button>
        </Box>

        {/* Glasses Image with individual positioning */}
        <Box flex="1" paddingRight="100px"> {/* Swapped to the right */}
          <Image
            src="specs.png"
            alt="Glasses Image"
            h="500px"
            w="500px"
          />
        </Box>
        <Box  position="fixed"   // Position the dots vertically in the middle
        right ="10px"       
        top= "350px" 
        transform="translateY(-50%)"  
        zIndex="1000"
        >
        <Circle size = "12px" border="2px solid black" borderColor = "black" mb = {3} mr = {2} 
        background={activeSection === "home" ? "black" : "none"}
        >
        </Circle>
        <Circle size = "12px" border="2px solid black" borderColor = "black" mb = {3} mr = {2} 
        background={activeSection === "about" ? "black" : "none"}
        >
        </Circle>
        <Circle size = "12px" border="2px solid black" borderColor = "black" mb = {3} mr = {2} 
        background={activeSection === "contact" ? "black" : "none"}
        >
        </Circle>
        <Circle size = "12px" border="2px solid black" borderColor = "black" mb = {3} mr = {2} 
        background={activeSection === "donate" ? "black" : "none"}
        >
        </Circle>

        
      


        </Box>
        
        
      </Flex>

      
    </Box>
  );
};


export default Welcome_Page;
