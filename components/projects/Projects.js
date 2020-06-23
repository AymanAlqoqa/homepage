import * as styles from "./projects.module.css";

export default function Projects({ id }) {
  return (
    <div id={id} className={`${styles.container} section__title`}>
      <span>Latest Projects</span>
      <ul className={styles.list}>
        <li>
          <a href="https://to-gether.herokuapp.com/" target="_blank">
            <div className={styles.mask}>Work Together</div>
            <img
              src="/images/projects/together.PNG"
              alt="project image"
              title="Work Together"
            />
          </a>
        </li>
        <li>
          <a href="https://logicteca.herokuapp.com/" target="_blank">
            <div className={styles.mask}>Logicteca Company</div>
            <img src="/images/projects/logicteca.PNG" alt="project image" />
          </a>
        </li>
        <li>
          <a
            href="https://condescending-dijkstra-8f43d2.netlify.app/"
            target="_blank"
          >
            <div className={styles.mask}>GSG G6 Students</div>
            <img src="/images/projects/gsg_g6.PNG" alt="project image" />
          </a>
        </li>
        <li>
          <a href="https://leannky-anty.herokuapp.com/" target="_blank">
            <div className={styles.mask}>Leanky Anty</div>
            <img src="/images/projects/leanky.PNG" alt="project image" />
          </a>
        </li>
      </ul>
    </div>
  );
}
