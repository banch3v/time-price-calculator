import { extendTheme } from "@chakra-ui/react";
import "@fontsource-variable/montserrat";
import Button from "./Button/Button";
import Heading from "./Heading/Heading";

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        fontFamily: "Montserrat, sans-serif",
        bg: "black",
        color: "white",
        fontSize: "16px",
      },
    },
  },
  breakpoints: {
    xs: "20em", // 320px
    sm: "30em", // 480px
    md: "48em", // 768px
    lg: "62em", // 992px
    xl: "80em", // 1280px
  },
  layerStyles: {
    section: {
      base: {
        padding: ["40px 20px", null, "60px 30px", null, "80px 50px"],
        margin: "0 auto",
      },

      sm: {
        padding: ["20px 20px", null, "20px 30px", null, "20px 50px"],
        margin: "0 auto",
      },
      md: {
        padding: ["20px 20px", null, "40px 30px", null, "60px 50px"],
        margin: "0 auto",
      },
      notb: {
        padding: ["0px 20px", null, "0px 30px", null, "0px 50px"],
        margin: "0 auto",
      },
    },
    grid: {
      fullWidth: {
        w: "100%",
        maxW: "100%",
      },
      inGrid: {
        w: "100%",
        maxW: "1280px",
        mx: "auto",
      },
      shortGrid: {
        w: "100%",
        maxW: "900px",
        mx: "auto",
      },
    },
  },
  components: {
    Button,
    Heading,
  },
});

export default theme;
