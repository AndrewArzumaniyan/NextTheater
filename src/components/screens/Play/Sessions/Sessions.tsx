import React, { FC, useState } from "react";
import Link from "next/link";
import Arrow from "@/components/UI/Arrow/Arrow";
import { SessionsInterface } from "@/interfaces/session.interface";

import styles from "./Sessions.module.scss";

interface SessionsProps {
  subtitle: string;
  sessions: SessionsInterface;
}

const Sessions: FC<SessionsProps> = ({ subtitle, sessions }) => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const dates: string[] = Object.keys(sessions)
    .map(key => {
      const [month, year] = key.split('-');
      return { key, date: new Date(+year, +month - 1, 1) };
    })
    .sort((a, b) => a.date.getTime() - b.date.getTime())
    .map(({ key }) => key)

  return (
    <section className={styles.sessions}>
      <div className="container">
        <h4 className={styles.subtitle}>{subtitle}</h4>
        <h2 className={`second-title ${styles.title}`}>Сеансы</h2>
        <ul className={styles.datesList}>
          {dates.map((date, i) => (
            <li className={styles.dateItem}>
              <div onClick={() => setOpenIndex(i)} className={styles.dateItemBlock}>
                <h4>{date}</h4>
                <Arrow width={11} height={19} fill="#000" direction="down" />
              </div>
              <ul className={`${openIndex === i && styles.active} ${styles.sessionsList}`}>
                {sessions[date].map((session) => (
                  <li className={styles.sessionItem}>
                    <h5 className={styles.sessionTitle}>{session.title}</h5>
                    <Link className="big-btn" href={session.href}>Билеты</Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Sessions;