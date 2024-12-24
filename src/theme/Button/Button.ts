import { defineStyleConfig } from "@chakra-ui/react";

const Button = defineStyleConfig({
  // The styles all button have in common
  baseStyle: {
    fontWeight: "bold",
    rounded: "md",
  },
  // variations
  variants: {
    solid: {
      bg: "white",
      color: "black",
      border: "1px solid",
      _hover: {
        bg: "transparent",
        color: "white",
      },
    },
    outline: {
      bg: "transparent",
      color: "white",
      border: "1px solid",
      _hover: {
        bg: "white",
        color: "black",
      },
    },
  },
  // The default size and variant values
  defaultProps: {
    variant: "outline",
  },
});

export default Button;
