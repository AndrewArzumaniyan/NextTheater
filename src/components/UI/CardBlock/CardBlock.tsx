import React, { FC, useEffect, useState } from "react";
import Card from "../Card/Card";
import { cardElementInterface } from "../../../interfaces/CardElement.interface";
import styles from "./CardBlock.module.scss";

interface CardBlockProps {
  title: string;
  cardElements: cardElementInterface[];
}

const CardBlock: FC<CardBlockProps> = ({ title, cardElements }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredData, setFilteredData] = useState<cardElementInterface[]>(cardElements);

  useEffect(() => {
    setFilteredData(cardElements);
  }, [cardElements]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    if (!term) {
      setFilteredData(cardElements);
      return;
    }

    const filtered = cardElements.filter((item) => item.title.toLowerCase().includes(term));

    setFilteredData(filtered);
  }

  return (
    <section className={styles.cardElement}>
      <div className="container">
        <div className={styles.titleBlock}>
          <h2 className={`second-title ${styles.title}`}>{title}</h2>
          <div className={styles.search}>
            <input 
              value={searchTerm} 
              onChange={handleSearch}
              type="text" 
              placeholder="поиск..." 
            />
          </div>
        </div>
        <ul className={styles.cardBlock}>
          {!filteredData.length ? "no data" : filteredData.map((el) => (
            <Card key={el.title} className={styles.card} cardElement={el} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default CardBlock;