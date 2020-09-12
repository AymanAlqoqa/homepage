import * as styles from './about.module.css';
import Link from 'next/link';
import { app } from '../../base';

export default function About({ id }) {
  const [resumes, setResumes] = React.useState([]);

  React.useEffect(() => {
    const db = app.firestore();
    const fetchResume = async () => {
      const resumesCollection = await db.collection('resumes').get();
      setResumes(resumesCollection.docs.map((doc) => doc.data()));
    };
    fetchResume();
  }, []);
  return (
    <div id={id} className={styles.container}>
      <div className={styles.image}>
        <img src="/images/profile.jpg" alt="profile" />
      </div>
      <div className={styles.about}>
        <span className="section__title">About</span>
        <span>Biography</span>
        <p>
          Full stack web developer specialized in single page application
          (react) and express back end server, in addition to Next React
          framework. Developed with my team many beneficial projects including a
          task/scrum manager platform which facilitates managing more than 20
          employees on middle size company. Another great project is
          work-together, a freelance working platform for south Londoners.
        </p>
        <div className={styles.buttons}>
          <button disabled={!resumes[0] ? true : false}>
            <a href={resumes[0] && resumes[0].url} target="_blank">
              Download Resume
            </a>
          </button>
          <Link href="/#contact">
            <button className={styles.primary}>hire me</button>
          </Link>
        </div>
        <div className={styles.skills}>
          <span>skills</span>
          <ul className={styles.list}>
            <li>JavaScript (Nodejs)</li>
            <li>Reactjs</li>
            <li>Nextjs</li>
            <li>Expressjs</li>
            <li>handlebars</li>
            <li>REST-full api</li>
            <li>Postgres sql databse</li>
            <li>MongoDB</li>
            <li>TDD testing</li>
            <li>Agile methodology</li>
            <li>Version control (git/github)</li>
            <li>Html5/CSS3</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
