import {
  Flex,
  Input,
  NumberInput,
  InputLeftElement,
  InputGroup,
  Text,
  VStack,
  NumberInputField,
  Divider,
  Link,
} from "@chakra-ui/react";
import { Select } from "chakra-react-select";
import { IoHourglassOutline } from "react-icons/io5";

import { BsCurrencyExchange } from "react-icons/bs";
import { currencies } from "../../assets/currencies";

export default function Calculator(): JSX.Element {
  return (
    <Flex
      w="50%"
      direction="column"
      gap={8}
      border="1px solid"
      p={8}
      rounded="md"
    >
      <Flex gap={6} direction="row">
        <Flex direction="column" gap={2} w="50%">
          <Text as="label" fontWeight="500" color="gray.400">
            Hourly rate
          </Text>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              color="gray.400"
              fontSize="1.2em"
            >
              <IoHourglassOutline />
            </InputLeftElement>
            <Input />
          </InputGroup>
        </Flex>
        <Flex direction="column" gap={2} w="50%">
          <Text as="label" fontWeight="500" color="gray.400">
            Currency
          </Text>
          <InputGroup w="full">
            <InputLeftElement
              pointerEvents="none"
              color="gray.400"
              fontSize="1.2em"
            >
              <BsCurrencyExchange />
            </InputLeftElement>
            <Select
              placeholder="Select"
              options={currencies}
              chakraStyles={{
                container: (provided) => ({
                  ...provided,
                  w: "full",
                }),
                control: (provided) => ({
                  ...provided,
                  pl: "28px",
                }),
                menu: (provided) => ({
                  ...provided,
                  bg: "gray.700", // Example: change background color
                  color: "black", // Example: change text color
                }),
              }}
            />
          </InputGroup>
        </Flex>
      </Flex>
      <Flex direction="column" gap={2}>
        <Text fontSize="18px" fontWeight="700">
          Time spent
        </Text>
        <Flex gap={2} align="end">
          <VStack align="start" spacing={2}>
            <Text as="label" fontWeight="500" color="gray.400">
              Hours
            </Text>
            <NumberInput defaultValue={0} min={0} maxW="80px">
              <NumberInputField />
            </NumberInput>
          </VStack>
          <Text mb="6px" fontSize="20px">
            :
          </Text>
          <VStack align="start" spacing={2}>
            <Text as="label" fontWeight="500" color="gray.400">
              Minutes
            </Text>
            <NumberInput defaultValue={0} min={0} maxW="80px">
              <NumberInputField />
            </NumberInput>
          </VStack>
        </Flex>
        <Divider pt="10px" />
        <Flex gap={2} align="end">
          <VStack align="start" spacing={2}>
            <Text as="label" fontWeight="500" color="gray.400">
              Hours
            </Text>
            <NumberInput defaultValue={0} min={0} maxW="80px">
              <NumberInputField />
            </NumberInput>
          </VStack>
          <Text mb="6px" fontSize="20px">
            :
          </Text>
          <VStack align="start" spacing={2}>
            <Text as="label" fontWeight="500" color="gray.400">
              Minutes
            </Text>
            <NumberInput defaultValue={0} min={0} maxW="80px">
              <NumberInputField />
            </NumberInput>
          </VStack>
        </Flex>
        <Link
          fontWeight="600"
          mt={4}
          alignSelf="start"
          textDecoration="underline"
          textUnderlineOffset={2}
          _hover={{ textDecoration: "none" }}
        >
          Add more time
        </Link>
      </Flex>
    </Flex>
  );
}
