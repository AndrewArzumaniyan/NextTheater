import React, { FC } from "react";
import Arrow from "../Arrow/Arrow";
import Link from "next/link";
import styles from "./Header.module.scss";
import { useRouter } from "next/router";

interface HeaderProps {
  title: string;
}
const Header: FC<HeaderProps> = ({ title }) => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  }

  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <button className={styles.btn} onClick={handleGoBack}>
          <Arrow width={21} height={34} fill="#ffffff" direction="left" />
        </button>
        <h1 className="title">{title}</h1>
      </div>
    </header>
  );
}

export default Header;