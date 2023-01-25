import * as styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={`${styles.container}`}>
      <p>
        Copyright ©{new Date().getFullYear()} by Ayman. All rights reserved.
      </p>
    </div>
  );
}
