import { Box, Container, Heading } from "@chakra-ui/layout";
import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/table";
import React from "react";

const header = () => {
  const data = [
    "S/N",
    "Class",
    "First term (₦)",
    "Second term (₦)",
    "Third term (₦)",
    "Total (₦)",
  ];
  return (
    <>
      <Thead>
        <Tr>
          {data.map((i) => {
              return(
                  <Th>{i}</Th>
              )
          })}
        </Tr>
      </Thead>
    </>
  );
};
export default function Fees() {
  return (
    <>
      <Box width="full" p={20} bgColor="#006600" color="#fff">
        <Heading>School Fees Information</Heading>
      </Box>
      <Container align="center" maxW="4xl">
          <Heading >Primary Section</Heading>
          
          <Table>
              {header()}
              <Tbody>
                <Tr>
                  <Td>1</Td>
                  <Td>Basic One(New)</Td>
                  <Td>170,000 payable in one installment</Td>
                </Tr>
                <Tr>
                  <Td>2</Td>
                  <Td>Basic one (Returning)</Td>
                  <Td>76,000</Td>
                  <Td>45,000</Td>
                  <Td>45,000</Td>
                  <Td>166,000</Td>
                </Tr>
              </Tbody>
          </Table>
      </Container>
    </>
  );
}
