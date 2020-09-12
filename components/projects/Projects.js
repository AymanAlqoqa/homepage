import * as styles from './projects.module.css';
import { app } from '../../base';

export default function Projects({ id }) {
  const [projects, setProjects] = React.useState([]);
  React.useEffect(() => {
    const db = app.firestore();
    const fetchProjects = async () => {
      const projectsCollection = await db.collection('projects').get();
      setProjects(projectsCollection.docs.map((doc) => doc.data()));
    };
    fetchProjects();
  }, []);
  return (
    <div id={id} className={`${styles.container} section__title`}>
      <span>Latest Projects</span>
      <ul className={styles.list}>
        {projects.map((project) => (
          <li key={project.name}>
            <a href={project.liveUrl} target="_blank">
              <div className={styles.mask}>{project.name}</div>
              <img
                src={project.imageUrl}
                alt={project.name}
                title={project.name}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
