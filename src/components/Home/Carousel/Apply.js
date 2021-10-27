import { Input, InputRightElement } from "@chakra-ui/input";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import React from "react";
import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { useDisclosure } from "@chakra-ui/hooks";
import { Select } from "@chakra-ui/select";

export default function Apply() {
  const initialRef = React.useRef();
  const finalRef = React.useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const day = "(day)";
  const boarding = "(boarding)";
  return (
    <>
      <button type="button" class="btn btn-success  mx-2" onClick={onOpen}>
        Apply
      </button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size={["sm"]}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody py={6}>
            <FormControl>
              <Select placeholder="Select Program" py={3}>
                <option value="option1">Pre Nursery {day}</option>
                <option value="option2">Nursery 1 {day}</option>
                <option value="option3">Primary 1 {day}</option>
                <option value="option3">Basic 1 {day}</option>
                <option value="option3">Nursery 1 {boarding}</option>
                <option value="option3">Primary 1 {boarding}</option>
                <option value="option3">Basic 1 {boarding}</option>
                <option value="option3">Secondary: JSS 1 {boarding}</option>
                <option value="option3">Secondary: SSS 1 {boarding}</option>
                <option value="option3">Higher Islam: JSS 1 {day}</option>
                <option value="option3">Higher Islam: SSS 1 {day}</option>
                <option value="option3">Higher Islam: JSS 1 {boarding}</option>
                <option value="option3">Higher Islam: SSS 1 {boarding}</option>
                <option value="option3">Diploma In Arabic</option>
                <option value="option3">Diploma In Islamic Studies</option>
                <option value="option3">Daaru Ibnu Katheer Litahfeezil Qur'an: JSS 1</option>
                <option value="option3">Daaru Ibnu Katheer Litahfeezil Qur'an: SSS 1</option>
                <option value="option3">Others (Including Transfer)</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input ref={initialRef} placeholder="Enter your first name" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input placeholder="Enter your last name" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Username</FormLabel>
              <Input placeholder="Create a username" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>

              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter password"
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
