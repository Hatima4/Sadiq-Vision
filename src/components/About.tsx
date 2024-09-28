import React from "react";
import { Box, Text, Heading, Image } from "@chakra-ui/react";

const Aboutpage = () => {
  return (
    <Box id="about" background="whitesmoke">
      <Box
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="flex-start"
        alignItems="center"
        minHeight="100vh"
        marginX={{ base: "5%", md: "10%" }}
      >
        <Box
          width={{ base: "100%", md: "50%", lg: "30%" }}
          textAlign="left"
          mb={{ base: "20px", md: "0" }}
        >
          <Heading color="black" marginBottom="20px">
            About Sadiq Vision
          </Heading>
          <Text color="black" fontWeight="bold" fontSize="md">
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
          width={{ base: "100%", md: "50%", lg: "40%" }}
          display="flex"
          justifyContent={{ base: "center", md: "flex-end" }}
          marginLeft={{ base: "0", md: "15%" }}
        >
          <Image src="dubaimap.png" alt="Dubai Map" />
        </Box>
      </Box>
    </Box>
  );
};

export default Aboutpage;
