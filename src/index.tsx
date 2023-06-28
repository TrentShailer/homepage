import { render } from "preact";
import {
  Box,
  ChakraProvider,
  Container,
  Divider,
  Grid,
} from "@chakra-ui/react";
import theme from "./theme";
import "./index.css";
import Body from "./Body";
import Footer from "./Footer";

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW="container.lg">
        <Box minH="calc(100vh - 60px)">
          <Body />
        </Box>
        <Footer />
      </Container>
    </ChakraProvider>
  );
}

render(<App />, document.getElementById("app"));
