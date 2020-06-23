import Sidebar from "./sidebar/Sidebar";
import * as styles from "./layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Sidebar />
      <div className={styles.container}>{children}</div>
      <div className={styles.fixedBg}></div>
    </>
  );
};

export default Layout;
