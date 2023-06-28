import { Box, Card } from "@chakra-ui/react";
import React from "preact";
import { useEffect, useState } from "preact/hooks";
import WCIcon from "./WebsiteCard/WCIcon";
import WCHeading from "./WebsiteCard/WCHeading";
import WCBackground from "./WebsiteCard/WCBackground";

export default function WebsiteCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <Box pos="relative" as="a" href="https://trentshailer.com">
        <Card
          transform={isHovered ? "scale(1.2)" : "scale(1)"}
          transition="transform 250ms"
          p={2}
          pt={4}
          h="160px"
          pos="relative"
          overflow="hidden"
        >
          <WCBackground isHovered={isHovered} />
          <WCHeading title="Password Generator" />
          <WCIcon
            isHovered={isHovered}
            path="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z"
          />
        </Card>
      </Box>
    </div>
  );
}
