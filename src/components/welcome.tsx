import { Box, Text, Button, Image, Flex } from '@chakra-ui/react';

const Welcome_Page = () => {
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
            _hover={{ boxShadow: '0 0 10px rgba(0, 212, 255, 0.8)' }}
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
        
      </Flex>
    </Box>
  );
};

export default Welcome_Page;
