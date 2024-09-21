import { Box, Flex, Button, Text, HStack } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box>
      <Flex as="nav" alignItems="center" padding="20px">
        {/* Left-aligned "Sadiq Vision" */}
        <Text fontWeight="bold" fontSize="24px">
          Sadiq Vision
        </Text>

        {/* Center the remaining items */}
        <Flex flex="1" justifyContent="center">
          <HStack spacing="60px">
            <Text fontWeight="bold" fontSize="24px">
              Home
            </Text>
            <Text fontWeight="bold" fontSize="24px">
              About
            </Text>
            <Text fontWeight="bold" fontSize="24px">
              Contact Us
            </Text>
            <Text fontWeight="bold" fontSize="24px">
              Team
            </Text>
            <Button
              fontWeight="bold"
              fontSize="24px"
              colorScheme="green"
              variant="outline"
            >
              Donate
            </Button>
          </HStack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
