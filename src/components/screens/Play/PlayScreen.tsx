import { Play } from "@/interfaces/play.interface";
import React, { FC } from "react";
import Header from "@/components/UI/Header/Header";
import Footer from "@/components/UI/Footer/Footer";

interface PlayScreenProps {
  play: Play;
}

const PlayScreen: FC<PlayScreenProps> = ({ play }) => {
  

  return (
    <>
      <Header title={play.playName} />
      <main className="main">

      </main>
      <Footer />
    </>
  );
}

export default PlayScreen;