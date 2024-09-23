import React from "react";
import {
  Box,
  HStack,
  VStack,
  Text,
  Circle,
  Image,
  Link,
} from "@chakra-ui/react";

const Team = () => {
  return (
    <Box height="100vh" backgroundColor="whitesmoke" id="team">
      <Box textAlign="center" pt="50px">
        <Text color="black" fontWeight="bold" fontSize="5xl">
          Team
        </Text>
      </Box>

      {/* Team Members */}
      <HStack
        paddingTop="20px"
        justify="space-between"
        alignItems="center"
        width="80%"
        mx="auto"
      >
        {/* Qasim */}
        <VStack align="center" textAlign="center" mr = {5} width = "60%" paddingTop={8}>
          <Circle size="205px" border="3px solid black">
            <Link href="https://www.instagram.com/whiz_qasim786/">
              <Image
                src="qasim_pic.jpg"
                objectFit="cover"
                boxSize="100%"
                borderRadius="100px"
              />
            </Link>
          </Circle>
          <Text color="black" fontWeight="bold" fontSize="3xl">
            Qasim
          </Text>
          <Text color="grey" fontWeight="bold" fontSize="xl">
            NGO Owner
          </Text>
          <Text color="grey" fontSize="sm" textAlign="center">
            I'm an IB Diploma student passionate about making a difference. I lead initiatives to collect and distribute eyeglass frames to those in need, especially in Pakistan. My focus is on creating sustainable, long-term solutions to help the less fortunate get access to vision care.
          </Text>
        </VStack>

        {/* Shrey */}
        <VStack align="center" textAlign="center" width = "60%">
          <Circle size="200px" border="3px solid black">
            <Image
              src="black.jpeg"
              objectFit="cover"
              boxSize="100%"
              borderRadius="100px"
            />
          </Circle>
          <Text color="black" fontWeight="bold" fontSize="3xl">
            Shrey
          </Text>
          <Text color="grey" fontWeight="bold" fontSize="xl">
            Web Developer
          </Text>
          <Text color="grey" fontSize="sm" textAlign="center">
            JESS IB Student | Interested in math and programming | Can write in Python, Typescript and web development languages | Aspiring freelance web developer
          </Text>
        </VStack>

        {/* Hatim */}
        <VStack align="center" textAlign="center" width = "60%">
          <Circle size="205px" border="3px solid black">
            <Link href="https://www.linkedin.com/in/hatim-aamir-8aba7724a/">
              <Image
                src="kaneki.png"
                objectFit="fill"
                boxSize="100%"
                borderRadius="200px"
                height="200px"
                width="200px"
              />
            </Link>
          </Circle>
          <Text color="black" fontWeight="bold" fontSize="3xl">
            Hatim
          </Text>
          <Text color="grey" fontWeight="bold" fontSize="xl">
            Web Developer
          </Text>
          <Text color="grey" fontSize="sm" textAlign="center">
            IB Student in Jess | Interested in machine learning | Proficient in
            Python, Typescript and C++ | Freelance web developer
          </Text>
        </VStack>
      </HStack>
    </Box>
  );
};

export default Team;
