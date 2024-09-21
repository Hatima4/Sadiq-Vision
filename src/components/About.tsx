import React from "react";
import { Box, Text, Heading, Image } from "@chakra-ui/react";

const Aboutpage = () => {
  return (
    <Box
      id="about"
      backgroundImage="url('aboutBackground.webp')"
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
          <Heading color="white" marginBottom="20px">
            About Sadiq Vision
          </Heading>
          <Text color="white" fontWeight="bold" fontSize="md">
            At Sadiq Vision, we believe that true vision matters. Our mission is
            to make eyewear accessible to less privileged individuals in rural
            areas of Pakistan, helping them see the world clearly and live
            healthier, more fulfilling lives. Our CAS initiative is dedicated to
            collecting both new and gently used eyeglasses to distribute to
            those in need. By providing essential eyewear, we aim to make a
            lasting impact on the lives of individuals who might otherwise be
            unable to afford the vision care they deserve. We are currently
            collecting used and new eyeglasses at Jess School reception. Your
            donations can change lives by giving the gift of sight to those who
            need it most.
          </Text>
        </Box>
        <Box
          width="40%"
          display="flex"
          justifyContent="flex-end"
          marginLeft="5%" // Moves the image to the right by adding margin
        >
          <Image src="dubaimap.png" alt="Dubai Map" />
        </Box>
      </Box>
    </Box>
  );
};

export default Aboutpage;
