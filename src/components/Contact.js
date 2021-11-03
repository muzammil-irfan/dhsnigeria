import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  VStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  HStack
} from "@chakra-ui/react";
import { MdOutlineEmail } from "react-icons/md";
import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";

import { BsPerson } from "react-icons/bs";
import Icons from "./Icons";

export default function Contact() {
  return (
    <Container maxW="full" mt={0} centerContent overflow="hidden">
      <Flex>
        <Box
          bg="#F8F9FA"
          color="black"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading>Contact</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                    Fill up the form below to contact
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={6} alignItems="flex-start">
                      <Text>
                        <a href="tel:+2348036945761">
                          <PhoneIcon mx={1} />
                          +2348036945761
                        </a>
                      </Text>
                      <Text>
                        <a href="tel:+2348030657997">
                          <PhoneIcon mx={1} />
                          +2348030657997
                        </a>
                      </Text>
                      <Text>
                        <a href="tel:+2348036406589">
                          <PhoneIcon mx={1} />
                          +2348036406589
                        </a>
                      </Text>
                      <Text>
                        <a href="tel:+2347032541003">
                          <PhoneIcon mx={1} />
                          +2347032541003
                        </a>
                      </Text>
                      <Text>
                        <a href="mailto:info@dhsnigeria.org">
                          <EmailIcon mx={1.5} />
                          info@dhsnigeria.org
                        </a>
                      </Text>
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-start"
                  >
                    <Icons />
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="">
                    <VStack spacing={5}>
                      <FormControl id="name">
                        <FormLabel>Your Name</FormLabel>
                        <InputGroup>
                          <InputLeftElement
                            pointerEvents="none"
                            children={<BsPerson color="gray.800" />}
                          />
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Mail</FormLabel>
                        <InputGroup borderColor="">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<MdOutlineEmail color="gray.800" />}
                          />
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: "gray.300",
                          }}
                          placeholder="message"
                        />
                      </FormControl>
                      <FormControl id="name" float="right">
                        <Button
                          variant="solid"
                          bg="#006600"
                          color="white"
                          _hover={{ bg: "#005500" }}
                        >
                          Send Message
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}
