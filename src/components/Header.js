import {
  Box,
  Flex,
  HStack,
  IconButton,
  Image,
  useDisclosure,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import {Link} from 'react-router-dom'
const links = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "About",
    to: "/about",
  },
  {
    label: "Management",
    to: "/management",
  },
  {
    label: "E-learning",
    to: "/e-learning",
  },
  {
    label: "Fees",
    to: "/fees",
  },
  {
    label: "Contact",
    to: "/contact",
  },
];
export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const env = process.env.PUBLIC_URL;
  const headerImage = `${env}/images/top-logo.png`
  return (
    <>
      <Box bg={'gray.50'} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} >
            <Box><Image src={headerImage} w="259px" h="50px"/></Box>
            <HStack
              as={'nav'}
              spacing={4}
              justifyContent="right"
              display={{ base: 'none', md: 'flex' }}>
              {links.map((link) => (
                <Link to={link.to}>{link.label}</Link>
              ))}
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {links.map((link) => (
                <Link  onClick={onClose} to={link.to}>{link.label}</Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}