import { Icon, Box } from "@chakra-ui/react";
import React from "preact";

type Props = {
  path: string;
  isHovered: boolean;
};

export default function WCIcon(props: Props) {
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
        fill={props.isHovered ? "green.900" : "green.600"}
        transition="fill 500ms"
        opacity={0.1}
        viewBox="0 0 24 24"
        width="150px"
        height="150px"
      >
        <path d={props.path} />
      </Icon>
    </Box>
  );
}
