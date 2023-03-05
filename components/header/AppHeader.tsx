import { getISOWeek } from "date-fns";
import { Navigation } from "../Navigation";

import styles from "./AppHeader.module.css";

const AppHeader = () => {
  const dagensDato = new Date();
  const ukenummer = getISOWeek(dagensDato);
  return (
    <header className={styles.summary}>
      <div className={styles.weekNumber}>Uke {ukenummer}</div>
      <Navigation />
    </header>
  );
};

export { AppHeader };
