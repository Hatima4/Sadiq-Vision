import React, { useRef } from "react";
import { Text, Box, Heading, Input, Textarea, Button, useToast } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import emailjs from "emailjs-com";

const Contactus = () => {
  const form = useRef<HTMLFormElement>(null);
  const toast = useToast();

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();  // Prevent the default form submission behavior

    emailjs
      .sendForm(
        "service_nri27ov", // Your EmailJS service ID
        "template_f04v2af", // Your EmailJS template ID
        form.current!,       // The form reference
        "ox2ZKXfeOv4RTpwUu" // Your EmailJS user ID (Public Key)
      )
      .then(
        (result) => {
          toast({
            title: "Email Sent.",
            description: "Sent.",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
          form.current!.reset();  // Reset the form after successful submission
        },
        (error) => {
          console.log(error.text);
          toast({
            title: "Error.",
            description: "There was an error sending your message.",
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
      height="100vh"
    >
      <Box
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        height="100vh"
        marginLeft="10%"
      >
        <Box width="30%" textAlign="left">
          <Heading marginBottom="30px">Contact Us</Heading>
          <Text marginBottom="20px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </Box>
        <Box
          width="40%"
          display="flex"
          flexDirection="column"
          marginLeft="15%"
          marginTop="30px"
        >
          <form ref={form} onSubmit={sendEmail}>
            <Text fontWeight="bold" fontSize="24px" marginBottom="10px">
              Name:
            </Text>
            <Input
              placeholder="Enter Name"
              name="user_name"  // Name attribute is required by EmailJS to map data
              marginBottom="20px"
              required
            />
            <Text fontWeight="bold" fontSize="24px" marginBottom="10px">
              Email:
            </Text>
            <Input
              type="email"
              placeholder="Enter Email"
              name="user_email"  // Name attribute is required by EmailJS
              marginBottom="20px"
              required
            />
            <Text fontWeight="bold" fontSize="24px" marginBottom="10px">
              Message:
            </Text>
            <Textarea
              placeholder="Enter message"
              name="message"  // Name attribute for EmailJS
              height="300px"
              resize="none"
              textAlign="left"
              marginBottom="20px"
              required
            />
            <Button
              type="submit"  // Submit type button
              colorScheme="blue"
              width="200px"
              marginLeft="200px"
              leftIcon={<EmailIcon />}
            >
              Send!
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default Contactus;
