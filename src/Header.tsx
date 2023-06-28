import { Box, GridItem, Heading } from "@chakra-ui/react";
import React from "preact";
import { MutableRef, useEffect, useRef, useState } from "preact/hooks";

type BarProps = {
  w: string;
  h: string;
  t: string;
};

export default function Header() {
  const textRef: MutableRef<HTMLHeadingElement> | undefined =
    useRef<HTMLHeadingElement>();

  const [barProps, setBarProps] = useState<BarProps>({
    w: "0px",
    h: "0px",
    t: "0px",
  });

  const SetBarProps = () => {
    if (!textRef) return;

    setBarProps((prev) => {
      const h = textRef.current.clientHeight / 3.33;
      return {
        ...prev,
        h: h + "px",
        t: textRef.current.clientHeight - h - 6 + "px",
      };
    });
    setTimeout(() => {
      setBarProps((prev) => {
        return { ...prev, w: textRef.current.clientWidth + "px" };
      });
    }, 200);
  };

  useEffect(() => {
    addEventListener("resize", SetBarProps);

    return () => {
      removeEventListener("resize", SetBarProps);
    };
  }, []);

  useEffect(() => {
    SetBarProps();
  }, [textRef, window.innerHeight, window.innerWidth]);

  return (
    <Box pos="relative" pb={4}>
      <Heading
        w="min-content"
        ref={textRef}
        lineHeight={"tall"}
        color="green.100"
        as="h1"
        size="2xl"
        noOfLines={1}
        opacity={1}
      >
        Homepage
      </Heading>
      <Box
        pos="absolute"
        top={barProps.t}
        zIndex={-1}
        bg="green.600"
        transition="width 1500ms"
        w={barProps.w}
        h={barProps.h}
      />
    </Box>
  );
}
