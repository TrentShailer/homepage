import { Box, GridItem, SimpleGrid, useToast } from "@chakra-ui/react";
import React from "preact";
import WebsiteCard from "./components/WebsiteCard";
import { useEffect, useState } from "preact/hooks";
import axios from "axios";

export type Site = {
  url: string;
  title: string;
  icon: string;
  color: string;
};

const baseColors = [
  "red",
  "orange",
  "yellow",
  "green",
  "teal",
  "blue",
  "cyan",
  "pink",
  "purple",
];

function shuffle<Type>(array: Type[]): Type[] {
  var currentIndex = array.length,
    temporaryValue: Type,
    randomIndex: number;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

export default function Body() {
  const [sites, setSites] = useState<Site[]>([]);

  const FetchSites = async () => {
    try {
      const colors = shuffle<string>(baseColors);

      const result = await axios.get("/sites.json");
      const data: { url: string; title: string; icon: string }[] = result.data;

      setSites(
        data.map((raw, i) => {
          const colorIndex = i % colors.length;
          return { ...raw, color: colors[colorIndex] };
        })
      );
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    FetchSites();
  }, []);
  return (
    <SimpleGrid pt={8} minChildWidth="300px" spacing={8}>
      {sites.map((site, i) => (
        <WebsiteCard key={i} site={site} />
      ))}
    </SimpleGrid>
  );
}
