import { Grid, Box, Heading, Text, Container } from "@chakra-ui/layout";
import { GridItem } from "@chakra-ui/react";
import React from "react";
const tableHeader = [
  "S/N",
  "Class",
  "First term (₦)",
  "Second term (₦)",
  "Third term (₦)",
  "Total (₦)",
];
const primary = [
  {
    index: 1,
    class: "Basic one (New)",
    center: true,
    text: "170,000 payable in one installment",
  },
  {
    index: 2,
    class: "	Basic one (Returning)",
    center: false,
    text: ["76,000", "45,000", "45,000", "166,000"],
  },
  {
    index: 3,
    class: "Primary (New)",
    center: true,
    text: "150,000 payable in one installment",
  },

  {
    index: 4,
    class: "Primary (Returning)",
    center: false,
    text: ["61,000", "40,000", "40,000", "141,000"],
  },
  {
    index: 5,
    class: "Pre Nursery & Nursery (New)",
    center: true,
    text: "100,000 payable in one installment",
  },
  {
    index: 6,
    class: "	Pre Nursery & Nursery (Returning)",
    center: false,
    text: ["40,000", "25,000", "25,000", "90,000"],
  },
  {
    index: 7,
    class: "	Boarding fees",
    center: false,
    text: ["176,000", "130,000", "130,000", "512,000"],
  },
  {
    index: 8,
    class: "Development levy",
    center: true,
    text: "5,000 per family per annum",
  },
];
const secondary = [
  {
    index: 1,
    class: "	JSS (New)",
    center: true,
    text: "512,000 payable in one installment",
  },
  {
    index: 2,
    class: "	JSS (Returning)",
    center: false,
    text: ["190,000", "120,000", "120,000", "430,000"],
  },
  {
    index: 3,
    class: "SSS (New)",
    center: true,
    text: "566,000 payable in one installment",
  },

  {
    index: 4,
    class: "SSS (Returning)",
    center: false,
    text: ["220,000", "130,000", "130,000", "480,000"],
  },
  {
    index: 5,
    class: "Development levy	",
    center: true,
    text: "11,000 per family per annum",
  },
  {
    index: 6,
    class: "PTA",
    center: true,
    text: "N3,000 Per annum",
  },
];
export default function Fees() {
  return (
    <>
      <Container maxW="6xl" >
        <Box justifyContent="center" width="full">
          <Heading size="lg" align="center">
            Primary Section
          </Heading>
          <Grid
            templateRows="repeat(5,1fr)"
            templateColumns="repeat(6,1fr)"
            my={3}
            mx={6}
            gap={3}
          >
            {tableHeader.map((data) => {
              return (
                  <>
                <GridItem>
                  <Text fontSize="xs">{data}</Text>
                </GridItem>
                
                </>
              );
            })}
            {primary.map((data) => {
              if (data.center) {
                return (
                  <>
                    <GridItem>
                      <Text fontSize="xs">{data.index}</Text>
                    </GridItem>
                    <GridItem>
                      <Text fontSize="xs">{data.class}</Text>
                    </GridItem>
                    <GridItem colSpan={4} align="center">
                      <Text fontSize="xs">{data.text}</Text>
                    </GridItem>
                  </>
                );
              }
              return (
                <>
                  <GridItem>
                    <Text fontSize="xs">{data.index}</Text>
                  </GridItem>
                  <GridItem>
                    <Text fontSize="xs">{data.class}</Text>
                  </GridItem>
                  {data.text.map((amount) => {
                    return (
                      <GridItem >
                        <Text fontSize="xs">{amount}</Text>
                      </GridItem>
                    );
                  })}
                </>
              );
            })}
            </Grid>
        </Box>
            <Box justifyContent="center" width="full" my={6}>
            <Heading size="lg" align="center">
            Secondary Section
          </Heading>
          <Grid
            templateRows="repeat(5,1fr)"
            templateColumns="repeat(6,1fr)"
            my={3}
            mx={6}
            gap={3}
          >
            {secondary.map((data) => {
              if (data.center) {
                return (
                  <>
                    <GridItem>
                      <Text fontSize="xs">{data.index}</Text>
                    </GridItem>
                    <GridItem>
                      <Text fontSize="xs">{data.class}</Text>
                    </GridItem>
                    <GridItem colSpan={4} align="center">
                      <Text fontSize="xs">{data.text}</Text>
                    </GridItem>
                  </>
                );
              }
              return (
                <>
                  <GridItem>
                    <Text fontSize="xs">{data.index}</Text>
                  </GridItem>
                  <GridItem>
                    <Text fontSize="xs">{data.class}</Text>
                  </GridItem>
                  {data.text.map((amount) => {
                    return (
                      <GridItem >
                        <Text fontSize="xs">{amount}</Text>
                      </GridItem>
                    );
                  })}
                </>
              );
            })}
    </Grid>
            
          
        </Box>
      </Container>
    </>
  );
}
