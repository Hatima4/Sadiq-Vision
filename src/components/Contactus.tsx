import React, { useRef } from "react";
import {
  Text,
  Box,
  Heading,
  Input,
  Textarea,
  Button,
  useToast,
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
            description: "Sent.",
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
          At Sadiq Vision, we are committed to making vision care accessible to those in need. Reach out to us if you have any questions about donating eyeglass lenses, partnering with us in our mission, or learning more about our ongoing projects to support underprivileged communities in Pakistan. Whether you’re looking to contribute, collaborate, or simply need more information, we’re here to help. Together, we can make a lasting impact by restoring sight and providing hope to those who need it most.
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
              name="user_name" // Name attribute is required by EmailJS to map data
              marginBottom="20px"
              required
            />
            <Text fontWeight="bold" fontSize="24px" marginBottom="10px">
              Email:
            </Text>
            <Input
              type="email"
              placeholder="Enter Email"
              name="user_email" // Name attribute is required by EmailJS
              marginBottom="20px"
              required
            />
            <Text fontWeight="bold" fontSize="24px" marginBottom="10px">
              Message:
            </Text>
            <Textarea
              placeholder="Enter message"
              name="message" // Name attribute for EmailJS
              height="300px"
              resize="none"
              textAlign="left"
              marginBottom="20px"
              required
            />
            <Button
              type="submit" // Submit type button
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
