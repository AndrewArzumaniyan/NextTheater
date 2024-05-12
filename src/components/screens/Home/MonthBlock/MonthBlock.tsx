import React, { FC, MouseEventHandler, useState } from "react";
import styles from "./MonthBlock.module.scss";

interface monthsMapInterface {
  [key: number]: string;
}

const monthMap: monthsMapInterface = {
  1: 'январь',
  2: 'февраль',
  3: 'март',
  4: 'апрель',
  5: 'май',
  6: 'июнь',
  7: 'июль',
  8: 'август',
  9: 'сентябрь',
  10: 'октябрь',
  11: 'ноябрь',
  12: 'декабрь',
}

interface MonthBLockProps {
  monthClickHandler: any;
}

const MonthBLock: FC<MonthBLockProps> = ({ monthClickHandler }) => {
  const [active, setActive] = useState<number>(0);

  const currentMonthNumber: number = (new Date(Date.now())).getMonth() + 1;
  const monthsNumbers = Array.from({ length: 5 }, (_, i) => currentMonthNumber + i);

  return (
    <ul className={styles.list}>
      {monthsNumbers.map((monthNumber, i) => (
        <li 
          className={styles.item} 
          key={monthNumber}
        >
          <button 
            className={`${active === i && styles.active} ${styles.btn}`} 
            data-month={monthNumber}
            onClick={(event) => {
              setActive(i);
              monthClickHandler(event);
            }}
          >
            {monthMap[monthNumber]}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default MonthBLock;