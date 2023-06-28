import { Box } from "@chakra-ui/react";
import React from "preact";
import { useEffect, useState } from "preact/hooks";

type Props = {
  isHovered: boolean;
};

export default function WCBackground(props: Props) {
  const [boxLeft, setBoxLeft] = useState("-100%");

  useEffect(() => {
    setBoxLeft(props.isHovered ? "0%" : "-100%");
  }, [props.isHovered]);

  return (
    <Box
      pos="absolute"
      bg="green.500"
      height="160px"
      width="100%"
      top="0"
      transition="left 500ms"
      left={boxLeft}
    />
  );
}
