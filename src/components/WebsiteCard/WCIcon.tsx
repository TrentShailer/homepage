import { Icon, Box } from "@chakra-ui/react";
import React from "preact";

type Props = {
  icon: string;
  color: string;
  isHovered: boolean;
};

export default function WCIcon({ icon, isHovered, color }: Props) {
  return (
    <Box
      pos="absolute"
      left="0"
      right="0"
      top="0"
      bottom="0"
      m="auto"
      h="150px"
      w="150px"
      zIndex={0}
    >
      <Icon
        fill={isHovered ? color + ".900" : color + ".500"}
        transition="all 500ms"
        opacity={isHovered ? 0.33 : 0.2}
        viewBox="0 0 24 24"
        width="150px"
        height="150px"
      >
        <path d={icon} />
      </Icon>
    </Box>
  );
}
