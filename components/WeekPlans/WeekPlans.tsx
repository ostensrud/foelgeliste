import { WeekPlansTable } from "./WeekPlansTable";
import useSWR from "swr";

import styles from "./WeekPlans.module.css";
import { Loader } from "../loader";

const WeekPlans = () => {
  const { data, error, isLoading } = useSWR("/api/ukeplaner");

  return (
    <div className="card">
      {isLoading && (
        <div className={styles.center}>
          <Loader />
        </div>
      )}
      {error && error}
      {data && <WeekPlansTable input={data} />}
      <aside className={styles.weekPlanLinks}>
        <span>Ukeplanene er hentet fra </span>
        <a href="https://levreskole.no/index.php?pageID=517">
          Levre skole sine nettsider
        </a>
      </aside>
    </div>
  );
};

export { WeekPlans };
