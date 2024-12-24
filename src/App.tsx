import { Flex, Heading, Text } from "@chakra-ui/react";
import Calculator from "./components/Calculator/Calculator";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Flex layerStyle="section.md">
        <Flex
          layerStyle="grid.inGrid"
          direction="column"
          align="center"
          gap={4}
        >
          <Heading as="h1" fontSize="48px">
            Calculate your work value
          </Heading>
          <Text fontSize="20px" textAlign="center" maxW="600px">
            Determine how much to charge your clients based on your hourly rate
            and the time you spend on a project.
          </Text>
        </Flex>
      </Flex>
      <Flex layerStyle="section.notb">
        <Flex
          layerStyle="grid.shortGrid"
          direction="row"
          gap={10}
          bg="gray.900"
          p={10}
          rounded="md"
        >
          <Calculator />
          <Flex>
            <Text fontSize="20px">Results</Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default App;
