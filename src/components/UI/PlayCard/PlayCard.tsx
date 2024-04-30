import { Play } from "@/interfaces/play.interface";
import React, { FC } from "react";
import styles from "./PlayCard.module.scss";
import Link from "next/link";

interface PlayCardProps {
  play: Play;
}

const PlayCard: FC<PlayCardProps> = ({ play }) => {


  return (
    <Link
      className={styles.card}
      href={`/play/${play.playId}`}
    >
      <div className={styles.info}>
        <h4 className={styles.title}>{play.playName}</h4>
        <b className={styles.subtitle}>{play.playGenre}</b>
        <p className={styles.description}>{play.playInfo}</p>
      </div>
      <Link
        href={`/play/${play.playId}/ticket`}
        className={styles.btn}
      >
        билеты
      </Link>
    </Link>
  );
}

export default PlayCard;