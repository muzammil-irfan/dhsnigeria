import {
  Box,
  Flex,
  IconButton,
  Collapse,
  useColorModeValue,
  useDisclosure,
  Image
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon
} from "@chakra-ui/icons";
import DesktopNav from "./Navbar/DesktopNav";
import { MobileNav } from "./Navbar/MobileNav";
export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const env = process.env.PUBLIC_URL;
  const headerImage = `${env}/images/top-logo.png`
  return (
    <>
    
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Image src={headerImage} w="259px" h="50px"/>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

       
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  </>
  );
}



