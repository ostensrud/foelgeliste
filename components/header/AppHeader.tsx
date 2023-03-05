import { getISOWeek } from "date-fns";
import Link from "next/link";

import styles from "./AppHeader.module.css";

const AppHeader = () => {
  const dagensDato = new Date();
  const ukenummer = getISOWeek(dagensDato);
  return (
    <header className={styles.summary}>
      <div className={styles.weekNumber}>Uke {ukenummer}</div>
      <nav>
        <Link href={"/"}>Dagsoversikt</Link>
        <Link href={"/komplett"}>Komplett oversikt</Link>
        <Link href={"/ukeplaner"}>Ukeplaner</Link>
      </nav>
    </header>
  );
};

export { AppHeader };
