import { Container, Heading, Flex } from "@chakra-ui/layout";
import React from "react";
import ManagementCard from "./ManagementCard";
const env = `${process.env.PUBLIC_URL}/images/`;
const data = [
  {
    image: `${env}Adam-AUwal-Abaniy.jpg`,
    text1: "(Late) Sheikh Muhammad Auwal Adam (Albaniy)",
    text2: "| Founder",
  },
  {
    image: `${env}Prof-Nafiu-Abdu.jpg`,
    text1: "Prof. Abdurrafiu Abdulganiyyu",
    text2: "| Director",
  },
  {
    image: `${env}Dr-Kabir-Asgar.jpg`,
    text1: "Dr. Kabir Abubakar Amin (Asgar)",
    text2: "| Deputy Director",
  },
  {
    image: `${env}yahaya-abdullahi.jpeg`,
    text1: "Shiekh Yahaya Abdullahi",
    text2: "| Chairman, Board of Trustees",
  },
];
export default function Management() {
  return (
    <>
      <Container maxW="6xl" align="center">
        <Heading my={3}>Management</Heading>
        <Flex flexDirection={{ base: "column", md: "row" }} justify="center">
          {data.map((data) => {
            return (
              <ManagementCard
                img={data.image}
                text1={data.text1}
                text2={data.text2}
                maxWidth="220px"
              />
            );
          })}
        </Flex>
      </Container>
    </>
  );
}
