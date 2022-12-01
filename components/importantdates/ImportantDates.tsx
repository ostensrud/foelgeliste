import { addDays, endOfDay, format, isAfter, isPast } from "date-fns";
import { ImportantDateType } from "../../types/ImportantDatesTypes";

interface ImportantDateProps {
  date: ImportantDateType;
}

interface ImportantDatesProps {
  data: ImportantDateType[];
}

const ImportantDate = (props: ImportantDateProps) => {
  const { date } = props;
  if (
    isPast(endOfDay(date.date)) ||
    isAfter(endOfDay(date.date), addDays(new Date(), 7))
  ) {
    return null;
  }
  return (
    <div className="flashCard">
      <h2>{date.title}</h2>
      <div className={"grid-box"}>
        <span className={"label"}>Når?</span>
        <span className={"value"}>
          {format(new Date(date.date), "dd.MM.yyyy")}
        </span>
        <span className={"label"}>Hva skjer?</span>
        <span className={"value"}> {date.description}</span>
      </div>
    </div>
  );
};

const ImportantDates = (props: ImportantDatesProps) => {
  if (!props.data.length) {
    return null;
  }
  const res = props.data.map((date) => (
    <ImportantDate date={date} key={date.date + date.title} />
  ));
  return <>{res}</>;
};

export { ImportantDates };
