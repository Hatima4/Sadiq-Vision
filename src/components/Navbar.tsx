import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Button,
  Text,
  HStack,
  VStack,
  IconButton,
} from "@chakra-ui/react";
import { EmailIcon, AddIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

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
      bg="white"
      position="fixed"
      top="0"
      width="100%"
      zIndex="999"
      boxShadow="sm"
      backdropFilter="blur(3px)"
    >
      <Flex
        as="nav"
        alignItems="center"
        justifyContent="space-between"
        padding={{ base: "10px", md: "20px" }}
      >
        <Text fontWeight="bold" fontSize={{ base: "20px", md: "24px" }}>
          Sadiq Vision
        </Text>

        <IconButton
          aria-label="Open Menu"
          display={{ base: "flex", md: "none" }}
          icon={isMobileMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        />

        <HStack as="nav" spacing="40px" display={{ base: "none", md: "flex" }}>
          <Text
            fontWeight="bold"
            fontSize="20px"
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
            fontSize="20px"
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
            fontSize="20px"
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
            fontSize="20px"
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
        </HStack>

        <HStack display={{ base: "none", md: "flex" }} spacing="20px">
          <Button
            leftIcon={<AddIcon />}
            fontWeight="bold"
            fontSize="20px"
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
            fontSize="20px"
            leftIcon={<EmailIcon />}
            bg="transparent"
            colorScheme="black"
            variant="outline"
          >
            Email
          </Button>
        </HStack>
      </Flex>

      {isMobileMenuOpen && (
        <Box
          display={{ base: "flex", md: "none" }}
          flexDirection="column"
          padding="20px"
          bg="white"
          shadow="md"
        >
          <VStack spacing="20px" align="flex-start">
            <Text
              fontWeight="bold"
              fontSize="20px"
              onClick={() => {
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Home
            </Text>
            <Text
              fontWeight="bold"
              fontSize="20px"
              onClick={() => {
                setMobileMenuOpen(false);
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              About
            </Text>
            <Text
              fontWeight="bold"
              fontSize="20px"
              onClick={() => {
                setMobileMenuOpen(false);
                document
                  .getElementById("team")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Team
            </Text>
            <Text
              fontWeight="bold"
              fontSize="20px"
              onClick={() => {
                setMobileMenuOpen(false);
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact us
            </Text>
            <Button
              leftIcon={<AddIcon />}
              fontWeight="bold"
              fontSize="20px"
              colorScheme="black"
              variant="outline"
              onClick={() => {
                setMobileMenuOpen(false);
                document
                  .getElementById("donate")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Donate
            </Button>
            <Button
              fontWeight="bold"
              fontSize="20px"
              leftIcon={<EmailIcon />}
              bg="transparent"
              colorScheme="black"
              variant="outline"
            >
              Email
            </Button>
          </VStack>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
