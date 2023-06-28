import { Box, GridItem, SimpleGrid } from "@chakra-ui/react";
import React from "preact";
import WebsiteCard from "./components/WebsiteCard";

export default function Body() {
  return (
    <SimpleGrid minChildWidth="300px" spacing={8}>
      <WebsiteCard />
      <WebsiteCard />
      <WebsiteCard />
      <WebsiteCard />
      <WebsiteCard />
    </SimpleGrid>
  );
}
