import React, { FC, ReactNode } from "react";
import Link from "next/link";
import { cardElementInterface } from "../../../interfaces/CardElement.interface";
import styles from "./Card.module.scss";


interface CardProps {
  cardElement: cardElementInterface;
  className: string;
}

const Card: FC<CardProps> = ({ cardElement, className }) => {
  return (
    <li className={`${className || ''} ${styles.card}`}>
      <div className={styles.top}>
        <h4 className={styles.title}>{cardElement.title}</h4>
        {cardElement.subtitle || <b>{cardElement.subtitle}</b>}
      </div>
      <div className={styles.bottom}>
        <Link className={`btn ${styles.btn}`} href={cardElement.btnHref}>{cardElement.btnText}</Link>
        <b className={styles.bottomText}>{cardElement.bottomText}</b>
      </div>
    </li>
  );
}

export default Card;