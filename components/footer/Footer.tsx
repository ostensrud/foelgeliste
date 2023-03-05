import { useState } from "react";
import { useIsNarrowScreen } from "../../hooks/useIsNarrowScreen";
import { Navigation } from "../Navigation";

import styles from "./Footer.module.css";

const Footer = () => {
  const [expanded, toggleExpanded] = useState<boolean>(false);
  if (!useIsNarrowScreen()) {
    return null;
  }
  return (
    <footer className={styles.appFooter}>
      {expanded && <Navigation />}
      <button
        className={styles.menuButton}
        onClick={() => toggleExpanded(!expanded)}
      >
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </button>
    </footer>
  );
};

export { Footer };
