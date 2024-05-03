import React, { FC, ReactNode } from "react";
import styles from "./Card.module.scss";
import Link from "next/link";

interface CardProps {
  cardHref: string;
  btnHref: string;
  btnText: string;
  children: ReactNode;
}

const Card: FC<CardProps> = ({ cardHref, btnHref, btnText, children }) => {
  return (
    <div
      className={styles.card}
    >
      <div className={styles.info}>
        {children}
      </div>
      <div className={styles["btn-box"]}>
        <Link
          href={btnHref}
          className={styles.btn}
        >
          билеты
        </Link>
        <Link
          className={styles.btn}
          href={cardHref}
          >
          {btnText}
        </Link>
      </div>
    </div>
  );
}

export default Card;