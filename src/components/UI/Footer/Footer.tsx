import React, { FC } from "react";
import styles from "./Footer.module.scss";

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <span className={styles.copy}>Copytight 2024</span>
      </div>
    </footer>
  );
}

export default Footer;