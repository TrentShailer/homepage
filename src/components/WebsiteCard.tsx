import { Box, Card } from "@chakra-ui/react";
import React from "preact";
import { useEffect, useState } from "preact/hooks";
import WCIcon from "./WebsiteCard/WCIcon";
import WCHeading from "./WebsiteCard/WCHeading";
import WCBackground from "./WebsiteCard/WCBackground";
import { Site } from "../Body";

type Props = {
  site: Site;
};

export default function WebsiteCard({ site, ...props }: Props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Box maxW="300px" pos="relative" as="a" href={site.url}>
        <Card
          transform={isHovered ? "scale(1.1)" : "scale(1)"}
          transition="transform 250ms"
          p={2}
          pt={4}
          h="160px"
          pos="relative"
          overflow="hidden"
        >
          <WCBackground color={site.color} isHovered={isHovered} />
          <WCHeading title={site.title} />
          <WCIcon icon={site.icon} color={site.color} isHovered={isHovered} />
        </Card>
      </Box>
    </div>
  );
}
