import { format } from "date-fns";
import { ImportantDateType } from "../../types/ImportantDatesTypes";

interface ImportantDatesProps {
  data: ImportantDateType[];
}

const ImportantDates = (props: ImportantDatesProps) => {
  return (
    <div className="flashCard">
      <h2>{props.data[0].title}</h2>
      <div className={"grid-box"}>
        <span className={"label"}>Når?</span>
        <span className={"value"}>
          {format(props.data[0].date, "dd.MM.yyyy")}
        </span>
        <span className={"label"}>Hva skjer?</span>
        <span className={"value"}> {props.data[0].description}</span>
      </div>
    </div>
  );
};

export { ImportantDates };
