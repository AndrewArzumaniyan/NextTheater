import PlayCard from "@/components/UI/PlayCard/PlayCard";
import { Play } from "@/interfaces/play.interface";
import { Theater } from "@/interfaces/theater.interface";
import Head from "next/head";
import React, { FC } from "react";

interface HomeScreenProps {
  theaters: Theater[];
  plays: Play[];
}

const HomeScreen: FC<HomeScreenProps> = ({ theaters, plays }) => {
  console.log(theaters)
  console.log(plays)

  return (
    <div className="container">
      {plays.map((play) => (
        <PlayCard play={play} />
      ))}
    </div>
  );
}

export default HomeScreen;