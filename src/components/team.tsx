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
      <HStack paddingTop="20px" spacing={8} justify="center">
        {/* Qasim */}
        <VStack align="center">
          <Circle size="205px" border="3px solid black">
            <Link href="https://www.instagram.com/whiz_qasim786/">
              <Image
                src="qasim_pic.jpg"
                objectFit="cover"
                boxSize="100%"
                borderRadius="100px"
              ></Image>
            </Link>
          </Circle>
          <Text color="black" fontWeight="bold" fontSize="3xl">
            Qasim
          </Text>
          Image
          <Text color="grey" fontWeight="bold" fontSize="xl">
            NGO Owner
          </Text>
          <Text color="grey" fontSize="sm" textAlign="center">
            
An IB Diploma student, has always had a passion to make a tangible difference. Qasim leads initiatives that collect and distribute eyeglass frames to those in need, particularly in Pakistan. His innovative approach and commitment to sustainable and long-term solutions for the impoverished drives the organization's mission to ensure that vision care is accessible to all.
          </Text>
        </VStack>

        {/* Shrey */}
        <VStack align="center">
          <Circle size="200px" border="3px solid black" />
          <Text color="black" fontWeight="bold" fontSize="3xl">
            Shrey
          </Text>
          <Text color="grey" fontWeight="bold" fontSize="xl">
            Web Developer
          </Text>
          <Text color="grey" fontSize="sm" textAlign="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia odio vitae vestibulum
            vestibulumdadjaisdjasioudjasodashjoudas
          </Text>
        </VStack>

        {/* Hatim */}
        <VStack align="center">
          <Circle size="205px" border="3px solid black">
            <Link href="https://www.linkedin.com/in/hatim-aamir-8aba7724a/">
              <Image
                src="kaneki.png"
                objectFit="fill"
                boxSize="100%"
                borderRadius="200px"
                height="200px"
                width="200px"
              ></Image>
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
