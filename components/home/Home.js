import * as styles from "./home.module.css";

export default function Home({ id }) {
  return (
    <div className={styles.home} id={id}>
      <span>senior</span>
      <span>Full-stack Web Developer</span>
      <span>Ayman Alqoqa</span>
    </div>
  );
}
