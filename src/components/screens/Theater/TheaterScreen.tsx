import { Play } from "@/interfaces/play.interface";
import { Theater } from "@/interfaces/theater.interface";
import React, { FC } from "react";
import Header from "@/components/UI/Header/Header";
import Footer from "@/components/UI/Footer/Footer";
import CardBlock from "@/components/UI/CardBlock/CardBlock";
import styles from "./TheaterScreen.module.scss";
import { cardElementInterface } from "@/interfaces/CardElement.interface";

interface TheaterScreenProps {
  theater: Theater;
  plays: Play[];
}
const TheaterScreen: FC<TheaterScreenProps> = ({ theater, plays }) => {
  let playCardElements: cardElementInterface[] = !plays.length ? [] : plays.map((play) => {
    return {
      title: play.playName,
      subtitle: `Режиссер: ${play.directorName}`,
      btnText: 'страница спектакля',
      btnHref: '#',
      bottomText: `${play.theaterName}`
    }
  });
  
  return (
    <>
      <Header title={theater.name} />
      <main className={styles.main}>
        <div className="container">
          <CardBlock title="Спектакли" cardElements={playCardElements} />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default TheaterScreen;