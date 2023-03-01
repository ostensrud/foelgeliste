import { useFetchText } from "../../hooks/useFetch";
import { WeekPlansTable } from "./WeekPlansTable";

const WeekPlans = () => {
  const { data, loading, error } = useFetchText("/api/ukeplaner");

  return (
    <div className="card">
      {loading && "Laster..."}
      {error && error}
      {data && <WeekPlansTable input={data} />}
    </div>
  );
};

export { WeekPlans };
