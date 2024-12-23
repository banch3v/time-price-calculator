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
        padding: ["60px 20px", null, "80px 30px", null, "100px 50px"],
        maxWidth: "1440px",
        margin: "0 auto",
      },

      xs: {
        padding: ["20px 20px", null, "20px 30px", null, "20px 50px"],
        maxWidth: "1440px",
        margin: "0 auto",
      },
    },
  },
  components: {
    Button,
    Heading,
  },
});

export default theme;
