import React, { useState, useEffect } from "react";
import { Box, Flex, Button, Text, HStack } from "@chakra-ui/react";
import { EmailIcon, AddIcon } from "@chakra-ui/icons";

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("home");

  const handleScroll = () => {
    const scrollPos = window.scrollY;
    const sectionHeight = window.innerHeight;

    if (scrollPos < sectionHeight) {
      setActiveSection("home");
    } else if (scrollPos >= sectionHeight && scrollPos < 2 * sectionHeight) {
      setActiveSection("about");
    } else if (
      scrollPos >= 2 * sectionHeight &&
      scrollPos < 3 * sectionHeight
    ) {
      setActiveSection("team");
    } else if (
      scrollPos >= 3 * sectionHeight &&
      scrollPos < 4 * sectionHeight
    ) {
      setActiveSection("contact");
    } else if (scrollPos >= 4 * sectionHeight) {
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
      bg="transparent"
      position="fixed"
      top="0"
      width="100%"
      zIndex="999"
      backdropFilter="blur(3px)"
    >
      <Flex
        as="nav"
        alignItems="center"
        padding="20px"
        bg="transparent"
        color="black"
      >
        {/* Left-aligned "Sadiq Vision" */}
        <Text fontWeight="bold" fontSize="24px">
          Sadiq Vision
        </Text>

        {/* Center the remaining items */}
        <Flex flex="1" justifyContent="center">
          <HStack spacing="60px">
            <Text
              fontWeight="bold"
              fontSize="24px"
              borderBottom={
                activeSection === "home" ? "2px solid #008B8B" : "none"
              }
              cursor="pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Home
            </Text>
            <Text
              fontWeight="bold"
              fontSize="24px"
              borderBottom={
                activeSection === "about" ? "2px solid #008B8B" : "none"
              }
              cursor="pointer"
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              About
            </Text>
            <Text
              fontWeight="bold"
              fontSize="24px"
              borderBottom={
                activeSection === "team" ? "2px solid #008B8B" : "none"
              }
              cursor="pointer"
              onClick={() =>
                document
                  .getElementById("team")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Team
            </Text>
            <Text
              fontWeight="bold"
              fontSize="24px"
              borderBottom={
                activeSection === "contact" ? "2px solid #008B8B" : "none"
              }
              cursor="pointer"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Contact us
            </Text>

            <Button
              leftIcon={<AddIcon />}
              fontWeight="bold"
              fontSize="24px"
              colorScheme="black"
              variant="outline"
              onClick={() =>
                document
                  .getElementById("donate")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Donate
            </Button>
            <Button
              fontWeight="bold"
              fontSize="24px"
              leftIcon={<EmailIcon />}
              bg="transparent"
              colorScheme="black"
              variant="outline"
            >
              {" "}
              Email
            </Button>
          </HStack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
