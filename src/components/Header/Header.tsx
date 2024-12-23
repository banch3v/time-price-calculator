import { Flex, Image, Heading } from "@chakra-ui/react";

export default function Header(): JSX.Element {
  return (
    <Flex as="header" layerStyle="section.xs">
      <Flex direction="column" justify="center" align="center" w="100%" gap={3}>
        <Image src="/price-time-calc-logo.png" maxW="320px"></Image>
        <Heading
          as="h1"
          fontSize="18px"
          fontWeight="400"
          maxW="400px"
          textAlign="center"
        >
          Calculate price based on your hourly rate and the time you spent
        </Heading>
      </Flex>
    </Flex>
  );
}
