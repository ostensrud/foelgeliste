import { useEffect, useState } from "react";
import { useIsNarrowScreen } from "../../hooks/useIsNarrowScreen";
import { Navigation } from "../Navigation";

import styles from "./Footer.module.css";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();
  const [expanded, toggleExpanded] = useState<boolean>(false);
  useEffect(() => {
    if (expanded) {
      toggleExpanded(false);
    }
  }, [router.pathname]);

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
