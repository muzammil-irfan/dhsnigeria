import React from "react";
import {
  Box,
  Stack,
  Flex,
  Image,
  Heading,
  Button,
  Container,
  Text
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
// ("https://source.unsplash.com/600x600/?nature,sea");
// About DHSN
export default function LeftImageCard(props) {
  return (
    <Container maxW='6xl' my={12} >
      <Flex columns={2} flexDirection={{md:'row',base:'column'}} >
        <Stack justify='center'>
            <Box >
              <Image src={props.imgSourceLeft} alt={props.imgAltLeft} maxW={props.maxWidth}/>
            </Box>
        </Stack>
            <Stack p={6} spacing={6} >
              <Heading>{props.headingLeft}</Heading>
              <Text>{props.paraLeft}</Text>
              <Box>
            <Link to={props.linkLeft}>    
              <Button bgColor="#006600"  _hover={{bgColor:'#005500'}} color='#fff'>{props.buttonTextLeft}</Button>
            </Link>
              </Box>
            </Stack>
        </Flex>
        </Container>
  );
}
