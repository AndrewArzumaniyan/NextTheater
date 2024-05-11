import React, { FC } from "react";
import Card from "../Card/Card";
import { cardElementInterface } from "./CardElement.interface";
import styles from "./CardBlock.module.scss";

interface CardBlockProps {
  title: string;
  cardElements: cardElementInterface[];
}

const CardBlock: FC<CardBlockProps> = ({ title, cardElements }) => {
  return (
    <section className={styles.cardElement}>
      <div className="container">
        <div className={styles.titleBlock}>
          <h2 className={`second-title ${styles.title}`}>{title}</h2>
          <div>search...</div>
        </div>
        <ul className={styles.cardBlock}>
          {cardElements.map((el) => (
            <Card className={styles.card} cardElement={el} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default CardBlock;