import { Play } from "@/interfaces/play.interface";
import React, { FC } from "react";
import Header from "@/components/UI/Header/Header";
import Footer from "@/components/UI/Footer/Footer";
import Sessions from "./Sessions/Sessions";
import { SessionsInterface } from "@/interfaces/session.interface";

import styles from "./PlayScreen.module.scss";

interface PlayScreenProps {
  play: Play;
}

const PlayScreen: FC<PlayScreenProps> = ({ play }) => {
  const currentDate = new Date(Date.now());
  const subtitle = `Спекталь проходит в театре: "${play.theaterName}"`;

  const sessions: SessionsInterface = play.begins.reduce((result, begin) => {
    const beginDate = new Date(begin.begin_time);
    if (beginDate < currentDate) {
      return result;
    }

    const key = `${String(beginDate.getMonth() + 1).padStart(2, '0')}-${beginDate.getFullYear()}`;
    const value = {
      href: `/buy/ticket/${begin.begin_id}`,
      title: `${beginDate.getDate()} числа, ${String(beginDate.getHours()).padStart(2, '0')}.${String(beginDate.getMinutes()).padStart(2, '0')}, ${begin.scene}`
    };
  
    if (!result[key]) {
      result[key] = [];
    }
  
    result[key].push(value);
  
    return result;

  }, {} as SessionsInterface);

  console.log(sessions)
  return (
    <>
      <Header title={play.playName} />

      <main className={styles.main}>
        <Sessions subtitle={subtitle} sessions={sessions} />
      </main>

      <Footer />
    </>
  );
}

export default PlayScreen;