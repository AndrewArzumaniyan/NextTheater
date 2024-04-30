import PlayCard from "@/components/UI/PlayCard/PlayCard";
import { Play } from "@/interfaces/play.interface";
import { Theater } from "@/interfaces/theater.interface";
import React, { FC } from "react";
import styles from "./TheaterScreen.module.scss";

interface TheaterScreenProps {
  theater: Theater;
  plays: Play[];
}
const TheaterScreen: FC<TheaterScreenProps> = ({ theater, plays }) => {
  return (
    <div className="container">
      <h1 className={styles.title}>{theater.name}</h1>
      <p className={styles.description}>{theater.info}</p>
      <ul>
        {plays.map((play) => (
          <PlayCard key={play.playId} play={play} ></PlayCard>
        ))}
      </ul>
    </div>
  );
}

export default TheaterScreen;