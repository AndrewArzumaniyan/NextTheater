import React, { FC } from "react";
import Arrow from "../Arrow/Arrow";
import Link from "next/link";
import styles from "./Header.module.scss";

interface HeaderProps {
  title: string;
}
const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <Link className={styles.btn} href="javascript:history.back()">
          <Arrow width={21} height={34} fill="#ffffff" direction="left" />
        </Link>
        <h1 className="title">{title}</h1>
      </div>
    </header>
  );
}

export default Header;