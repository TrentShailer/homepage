import { Heading } from "@chakra-ui/react";
import React from "preact";

type Props = {
  title: string;
};

export default function WCHeading(props: Props) {
  return (
    <Heading
      userSelect="none"
      zIndex={1}
      as="h2"
      size="lg"
      noOfLines={2}
      textAlign="center"
    >
      {props.title}
    </Heading>
  );
}
