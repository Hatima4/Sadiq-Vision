import React, { useRef } from "react";
import {
  Text,
  Box,
  Heading,
  Input,
  Textarea,
  Button,
  useToast,
  Flex,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import emailjs from "emailjs-com";

const Contactus = () => {
  const form = useRef<HTMLFormElement>(null);
  const toast = useToast();

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission behavior

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID!, 
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID!, 
        form.current!,       
        process.env.REACT_APP_EMAILJS_USER_ID!
      )
      .then(
        (result) => {
          toast({
            title: "Email Sent.",
            description: "Your message has been successfully sent!",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
          form.current!.reset(); // Reset the form after successful submission
        },
        (error) => {
          console.log(error.text);
          toast({
            title: "Error.",
            description:
              "There was an error sending your message. Please try again later.",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        }
      );
  };

  return (
    <Box
      id="contact"
      background="white"
      backgroundSize="cover"
      backgroundPosition="center"
      minHeight="100vh"
      padding="5%"
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        justifyContent="space-between"
        alignItems="flex-start"
      >
        {/* Contact Information */}
        <Box
          width={{ base: "100%", md: "40%" }}
          textAlign={{ base: "center", md: "left" }}
          mb={{ base: "20px", md: "0" }}
        >
          <Heading marginBottom="30px">Contact Us</Heading>
          <Text marginBottom="20px">
          At Sadiq Vision, we are committed to making vision care accessible to those in need. Reach out to us if you have any questions about donating eyeglass lenses, partnering with us in our mission, or learning more about our ongoing projects to support underprivileged communities in Pakistan. Whether you’re looking to contribute, collaborate, or simply need more information, we’re here to help. Together, we can make a lasting impact by restoring sight and providing hope to those who need it most.
          </Text>
        </Box>

        {/* Contact Form */}
        <Box
          width={{ base: "100%", md: "50%" }}
          display="flex"
          flexDirection="column"
        >
          <form ref={form} onSubmit={sendEmail}>
            <Text fontWeight="bold" fontSize="20px" marginBottom="10px">
              Name:
            </Text>
            <Input
              placeholder="Enter your name"
              name="user_name" // Name attribute is required by EmailJS
              marginBottom="20px"
              required
              _placeholder={{ color: "gray.500" }}
            />
            <Text fontWeight="bold" fontSize="20px" marginBottom="10px">
              Email:
            </Text>
            <Input
              type="email"
              placeholder="Enter your email"
              name="user_email" // Name attribute is required by EmailJS
              marginBottom="20px"
              required
              _placeholder={{ color: "gray.500" }}
            />
            <Text fontWeight="bold" fontSize="20px" marginBottom="10px">
              Message:
            </Text>
            <Textarea
              placeholder="Enter your message"
              name="message" // Name attribute for EmailJS
              height="200px"
              resize="none"
              marginBottom="20px"
              required
              _placeholder={{ color: "gray.500" }}
            />
            <Button
              type="submit"
              colorScheme="blue"
              leftIcon={<EmailIcon />}
              width="auto"
              marginLeft="0"
              mt={4}
            >
              Send Message
            </Button>
          </form>
        </Box>
      </Flex>
    </Box>
  );
};

export default Contactus;
