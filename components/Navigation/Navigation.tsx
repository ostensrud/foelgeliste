import Link from "next/link";

import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <Link href={"/"} className={styles.lenke}>
        Dagsoversikt
      </Link>
      <Link href={"/komplett"} className={styles.lenke}>
        Komplett oversikt
      </Link>
      <Link href={"/ukeplaner"} className={styles.lenke}>
        Ukeplaner
      </Link>
    </nav>
  );
};

export { Navigation };
