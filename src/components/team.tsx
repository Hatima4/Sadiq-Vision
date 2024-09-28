import React from "react";
import {
  Box,
  HStack,
  VStack,
  Text,
  Circle,
  Image,
  Link,
  useBreakpointValue,
} from "@chakra-ui/react";

const Team = () => {
  const memberWidth = useBreakpointValue({ base: "100%", md: "30%" });
  const circleSize = useBreakpointValue({ base: "150px", md: "205px" });
  const fontSizeName = useBreakpointValue({ base: "2xl", md: "3xl" });
  const fontSizeRole = useBreakpointValue({ base: "lg", md: "xl" });
  const fontSizeBio = useBreakpointValue({ base: "sm", md: "md" });

  return (
    <Box height="auto" backgroundColor="whitesmoke" id="team" py="50px">
      <Box textAlign="center">
        <Text color="black" fontWeight="bold" fontSize="5xl">
          Team
        </Text>
      </Box>

      <HStack
        paddingTop="20px"
        justify={{ base: "center", md: "space-between" }}
        alignItems="center"
        width="90%"
        mx="auto"
        flexWrap="wrap"
        spacing={{ base: "20px", md: "0" }}
      >
        {/* Qasim */}
        <VStack
          align="center"
          textAlign="center"
          width={memberWidth}
          paddingTop={8}
        >
          <Circle size={circleSize} border="3px solid black" overflow="hidden">
            <Link href="https://www.instagram.com/whiz_qasim786/">
              <Image
                src="qasim_pic.jpg"
                objectFit="cover"
                width="100%"
                height="100%"
              />
            </Link>
          </Circle>
          <Text color="black" fontWeight="bold" fontSize={fontSizeName}>
            Qasim
          </Text>
          <Text color="grey" fontWeight="bold" fontSize={fontSizeRole}>
            NGO Owner
          </Text>
          <Text color="grey" fontSize={fontSizeBio} textAlign="center">
            I'm an IB Diploma student passionate about making a difference. I
            lead initiatives to collect and distribute eyeglass frames to those
            in need, especially in Pakistan. My focus is on creating
            sustainable, long-term solutions to help the less fortunate get
            access to vision care.
          </Text>
        </VStack>

        <VStack align="center" textAlign="center" width={memberWidth}>
          <Circle size={circleSize} border="3px solid black" overflow="hidden">
            <Link href="https://www.linkedin.com/in/shrey-nautiyal-48000926b/">
              <Image
                src="black.jpeg"
                objectFit="cover"
                boxSize={circleSize}
                borderRadius="full"
              />
            </Link>
          </Circle>
          <Text color="black" fontWeight="bold" fontSize={fontSizeName}>
            Shrey
          </Text>
          <Text color="grey" fontWeight="bold" fontSize={fontSizeRole}>
            Web Developer
          </Text>
          <Text color="grey" fontSize={fontSizeBio} textAlign="center">
            JESS IB Student | Interested in math and programming | Can write in
            Python, Typescript and web development languages | Aspiring
            freelance web developer
          </Text>
        </VStack>

        {/* Hatim */}
        <VStack align="center" textAlign="center" width={memberWidth}>
          <Circle size={circleSize} border="3px solid black" overflow="hidden">
            <Link href="https://www.linkedin.com/in/hatim-aamir-8aba7724a/">
              <Image
                src="kaneki.png"
                objectFit="cover"
                width="100%"
                height="100%"
              />
            </Link>
          </Circle>
          <Text color="black" fontWeight="bold" fontSize={fontSizeName}>
            Hatim
          </Text>
          <Text color="grey" fontWeight="bold" fontSize={fontSizeRole}>
            Web Developer
          </Text>
          <Text color="grey" fontSize={fontSizeBio} textAlign="center">
            IB Student in Jess | Interested in machine learning | Proficient in
            Python, Typescript and C++ | Freelance web developer
          </Text>
        </VStack>
      </HStack>
    </Box>
  );
};

export default Team;
