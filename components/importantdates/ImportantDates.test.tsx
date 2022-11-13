import { render, screen } from "@testing-library/react";
import { addDays, format } from "date-fns";
import { ImportantDateType } from "../../types/ImportantDatesTypes";
import { ImportantDates } from "./ImportantDates";

describe("Important Dates", () => {
  test("tegner komponenten når det er en viktig dato mindre enn en uke frem i tid", () => {
    const dato = addDays(new Date(), 5);
    const data: ImportantDateType[] = [
      {
        date: dato,
        title: "Skidag!",
        description: "Vi skal ha vannski-dag! Husk vannski.",
      },
    ];

    render(<ImportantDates data={data} />);
    expect(screen.getByText(format(dato, "dd.MM.yyyy"))).toBeVisible();
    expect(screen.getByText("Skidag!")).toBeVisible();
    expect(
      screen.getByText("Vi skal ha vannski-dag! Husk vannski.")
    ).toBeVisible();
  });
});
