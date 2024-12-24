import { Flex, Image, Button, Link } from "@chakra-ui/react";

export default function Header(): JSX.Element {
  return (
    <Flex as="header" layerStyle="section.sm">
      <Flex
        layerStyle="grid.inGrid"
        justify="space-between"
        align="center"
        pb="20px"
        borderBottom="1px solid #ffffff30"
      >
        <Image src="/price-time-calc-logo.png" maxW="220px"></Image>
        <Link href="https://banchev.info/contacts/" target="_blank">
          <Button>Request feature</Button>
        </Link>
      </Flex>
    </Flex>
  );
}
