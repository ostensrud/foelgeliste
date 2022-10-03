import { render, screen } from "@testing-library/react";
import { getISOWeek, nextSaturday, previousMonday } from "date-fns";
import { WalkingScheduleType } from "../../types/DayTypes";
import { Today } from "./Today";

describe("Today", () => {
  const enMandag = new Date("2022-10-03");
  const enLørdag = new Date("2022-10-08");
  const enSøndag = new Date("2022-10-09");
  const ukenummer = "40";
  const schedule: WalkingScheduleType = {
    [ukenummer]: {
      dager: [
        {
          familie1: "Familie 1",
          familie2: "Familie 2",
        },
      ],
    },
  };

  test("viser en ukedag", () => {
    render(<Today dagensDato={enMandag} walkingSchedule={schedule} />);
    expect(screen.getByText(/^I dag er det mandag$/)).toBeVisible();
    expect(screen.getByText(/^Familie 1$/)).toBeVisible();
    expect(screen.getByText(/^Familie 2$/)).toBeVisible();
  });

  test("lørdager vises som fri", () => {
    render(<Today dagensDato={enLørdag} walkingSchedule={schedule} />);
    expect(screen.getByText(/^I dag er det lørdag$/)).toBeVisible();
    expect(screen.getByText(/^Da har vi fri!$/)).toBeVisible();
  });

  test("søndager vises som fri", () => {
    render(<Today dagensDato={enSøndag} walkingSchedule={schedule} />);
    expect(screen.getByText(/^I dag er det søndag$/)).toBeVisible();
    expect(screen.getByText(/^Da har vi fri!$/)).toBeVisible();
  });

  test("viser fri på dager som er i ferieuker", () => {
    const scheduleMedFerie: WalkingScheduleType = {
      [ukenummer]: {
        erFerieUke: true,
      },
    };
    render(<Today dagensDato={enMandag} walkingSchedule={scheduleMedFerie} />);
    expect(screen.getByText(/^I dag er det mandag$/)).toBeVisible();
    expect(screen.getByText(/^Fri hele uka!$/)).toBeVisible();
  });
});
