import { Play } from "@/interfaces/play.interface";
import { Theater } from "@/interfaces/theater.interface";
import Head from "next/head";
import React, { FC } from "react";

interface HomeScreenProps {
  theaters: Theater[];
  plays: Play[];
}

const HomeScreen: FC<HomeScreenProps> = ({ theaters, plays }) => {
  return (
    <div className="container">

    </div>
  );
}

export default HomeScreen;