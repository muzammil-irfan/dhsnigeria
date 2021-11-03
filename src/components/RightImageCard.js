import {
  Box,
  Image,
  Heading,
  Container,
  Flex,
  Stack,
  Text
} from "@chakra-ui/react";
import React from "react";
export default function RightImageCard(props) {
  return (
    <>
      <Container maxW='6xl' my={12}>
      <Flex columns={2} flexDirection={{md:'row-reverse',base:'column'}} >
        <Stack justify='center'>
            <Box >
              <Image src={props.imgSourceRight} alt={props.imgAltRight} maxW={props.maxWidth}/>
            </Box>
        </Stack>
            <Stack p={6} spacing={6} justify='center' >
              <Heading>{props.headingRight}</Heading>
              <Text>{props.paraRight}</Text>
            </Stack>
        </Flex>
        </Container>
    </>
  );
}
