import { Box, Text, Button, Image, Flex, Circle } from "@chakra-ui/react";
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
      setActiveSection("team");
    } else if (
      scrollPos >= 3 * window.innerHeight &&
      scrollPos < 4 * window.innerHeight
    ) {
      setActiveSection("contact");
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
      background="whitesmoke"
      textAlign="center"
      display="flex"
      flexDirection="column"
      id="home"
    >
      {/* Flex container for Welcome Text and Glasses */}
      <Flex
        justifyContent="space-between"
        alignItems="center"
        height="80vh"
        flexDirection={{ base: "column", md: "row" }}
      >
        {/* Welcome Text and Button */}
        <Box
          flex="1"
          paddingLeft={{ base: "20px", md: "100px" }}
          paddingTop={{ base: "100px", md: "200px" }}
        >
          <Text fontSize="5xl" fontWeight="bold">
            Welcome to our vision
          </Text>
          <Text fontSize="xl" color="gray.500" fontStyle="italic" mt={2}>
            Because all vision matters
          </Text>
          <Button
            mt={6}
            colorScheme="teal"
            size="lg"
            fontWeight="bold"
            borderRadius="lg"
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            boxShadow="0px 4px 15px rgba(0, 128, 128, 0.4)"
            _hover={{ boxShadow: "0 0 20px rgba(0, 128, 128, 0.6)" }}
          >
            Learn More
          </Button>
        </Box>

        <Box
          flex="1"
          paddingRight={{ base: "20px", md: "100px" }}
          paddingTop={{ base: "50px", md: "150px" }}
        >
          <Image
            src="specs.png"
            alt="Glasses Image"
            maxH={{ base: "300px", md: "500px" }}
            maxW={{ base: "300px", md: "500px" }}
            objectFit="contain"
          />
        </Box>

        {/* Scroll Dots */}
        <Box
          position="fixed"
          right="10px"
          top="50%"
          transform="translateY(-50%)"
          zIndex="1000"
        >
          <Circle
            size="12px"
            border="2px solid gray"
            borderColor="black"
            mb={3}
            mr={2}
            background={activeSection === "home" ? "gray" : "none"}
            cursor="pointer"
            onClick={() =>
              document
                .getElementById("home")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            _hover={{ background: "gray" }}
          />
          <Circle
            size="12px"
            border="2px solid gray"
            borderColor="black"
            mb={3}
            mr={2}
            background={activeSection === "about" ? "gray" : "none"}
            cursor="pointer"
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            _hover={{ background: "gray" }}
          />
          <Circle
            size="12px"
            border="2px solid gray"
            borderColor="black"
            mb={3}
            mr={2}
            background={activeSection === "team" ? "gray" : "none"}
            cursor="pointer"
            onClick={() =>
              document
                .getElementById("team")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            _hover={{ background: "gray" }}
          />
          <Circle
            size="12px"
            border="2px solid gray"
            borderColor="black"
            mb={3}
            mr={2}
            background={activeSection === "contact" ? "gray" : "none"}
            cursor="pointer"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            _hover={{ background: "gray" }}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Welcome_Page;
