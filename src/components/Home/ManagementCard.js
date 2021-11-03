import React from "react";
import { Stack, Box, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
export default function ManagementCard(props) {
  return (
    <>
      <Stack
        my={3}
        maxW={props.maxWidth}
        mx={3}
        p={3}
        border="1px"
        borderRadius="lg"
        boxShadow="xl"
      >
        <Box>
          <Image
            src={props.img}
            border="1px"
            boxShadow="xl"
            borderRadius="full"
            alt={props.imgAlt}
          />
        </Box>
        <Box align="left">
          <Text>{props.text1}</Text>
          <Text>{props.text2}</Text>
        </Box>
      </Stack>
    </>
  );
}
