import { Image } from "@chakra-ui/image";
import { Stack, Text, Box } from "@chakra-ui/layout";
import React from "react";

export default function CenterImageCard(props) {
  return (
    <>
      <Stack flexDirection="column" maxW={props.maxWidth} spacing={3} p={3}>
        <Box>
          <Image src={props.imgSource} alt={props.imgAlt} />
        </Box>
        <Box>
          <Text align="left">{props.para}</Text>
        </Box>
      </Stack>
    </>
  );
}
