import { Play } from "@/interfaces/play.interface";
import React, { FC } from "react";
import styles from "./PlayCard.module.scss";
import Card from "../Card/Card";

interface PlayCardProps {
  play: Play;
}

const PlayCard: FC<PlayCardProps> = ({ play }) => {
  return (
    <Card 
      cardHref={`/play/${play.playId}`} 
      btnHref={`/buy/ticket/`} 
      btnText="спектакль"
    >
      <h4 className={styles.title}>{play.playName}</h4>
      <b className={styles.subtitle}>{play.playGenre}</b>
      <p className={styles.description}>{play.playInfo}</p>
    </Card>
  );
}

export default PlayCard;