import * as styles from "./sidebar.module.css";
import { useState } from "react";
import Link from "next/link";

export default () => {
  const [hide, setHide] = useState(false);
  return (
    <div className={hide ? `${styles.sidebar} ${styles.hide}` : styles.sidebar}>
      <div className={styles.navList__container}>
        <ul className={styles.navList}>
          <li>
            <Link href="/#home">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/#about">
              <a>About us</a>
            </Link>
          </li>
          <li>
            <Link href="/#projects">
              <a>Projects</a>
            </Link>
          </li>
          <li>
            <Link href="/#contact">
              <a>Contact us</a>
            </Link>
          </li>
        </ul>
      </div>
      <button
        className={styles.navBurger}
        onClick={() => setHide((hide) => !hide)}
      >
        <div></div>
        <div></div>
        <div></div>
      </button>
    </div>
  );
};
