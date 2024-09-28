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
        "service_nri27ov", // Your EmailJS service ID
        "template_f04v2af", // Your EmailJS template ID
        form.current!, // The form reference
        "ox2ZKXfeOv4RTpwUu" // Your EmailJS user ID (Public Key)
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
            Have questions? Feel free to reach out, and we’ll be happy to assist
            you.
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

            {/* Button Container */}
            <Box display="flex" justifyContent="center">
              <Button
                type="submit"
                colorScheme="blue"
                leftIcon={<EmailIcon />}
                width="auto"
                mt={4}
              >
                Send Message
              </Button>
            </Box>
          </form>
        </Box>
      </Flex>
    </Box>
  );
};

export default Contactus;
