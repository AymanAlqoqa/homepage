import * as styles from "./contact.module.css";

export default function Projects({ id }) {
  return (
    <div id={id} className={`${styles.container}`}>
      <span className="section__title">Contact</span>
      <p>Client satisfaction is my goal</p>
      <button>
        <a href="mailto:aalqouqa@gmail.com">aalqouqa@gmail.com</a>
      </button>
    </div>
  );
}
