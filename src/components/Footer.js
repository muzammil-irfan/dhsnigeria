import { Heading, Text, SimpleGrid, VStack, HStack } from "@chakra-ui/layout";
import React from "react";
import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <footer>
        <SimpleGrid columns={[1, 2, 4]} spacing={10} p={10}>
          <VStack alignItems="left">
            <Heading size="lg" my={3} py={2} borderBottom="2px">
              About Us
            </Heading>
            <Text>
              Daarul Hadeethis Salafiyyah Nigeria (DHSN) is an Islamic
              foundation that was founded by a Prominent Nigerian Islamic
              scholar; (Late) Sheikh Muhammad Auwal Adam Albaniy Zaria
            </Text>
          </VStack>
          <VStack alignItems="left">
            <Heading size="lg" my={3} py={2} borderBottom="2px">
              Useful Links
            </Heading>
            <Link to="/about">About</Link>
            <Link to="/units">Units</Link>
            <Link to="/project">Projects</Link>
            <Link to="/career">Careers</Link>
          </VStack>
          <VStack alignItems="left">
            <Heading size="lg" my={3} py={2} borderBottom="2px">
              Contact Us
            </Heading>
            <Text>
              <a href="tel:+2348036945761">
                <PhoneIcon mx={1} />
                +2348036945761
              </a>
            </Text>
            <Text>
              <a href="tel:+2348030657997">
                {" "}
                <PhoneIcon mx={1} />
                +2348030657997
              </a>
            </Text>
            <Text>
              <a href="tel:+2348036406589">
                {" "}
                <PhoneIcon mx={1} />
                +2348036406589
              </a>
            </Text>
            <Text>
              <a href="tel:+2347032541003">
                {" "}
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
          <VStack alignItems="left">
            <Heading size="lg" my={3} py={2} borderBottom="2px">
              Follow Us
            </Heading>
             <Text>
            No. 4 Madarkachi Road, Gaskiya Layout, Zaria,  Kaduna State - Nigeria.
            </Text>
          </VStack>
        </SimpleGrid>
          <HStack justifyContent="center" >
            <Text>
            © Copyright 2020. All Rights Reserved.
            </Text>
          </HStack>
      </footer>
    </>
  );
}
