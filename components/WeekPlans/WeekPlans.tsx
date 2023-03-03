import { WeekPlansTable } from "./WeekPlansTable";
import useSWR from "swr";

const WeekPlans = () => {
  const { data, error, isLoading } = useSWR("/api/ukeplaner");

  return (
    <div className="card">
      {isLoading && "Laster..."}
      {error && error}
      {data && <WeekPlansTable input={data} />}
    </div>
  );
};

export { WeekPlans };
