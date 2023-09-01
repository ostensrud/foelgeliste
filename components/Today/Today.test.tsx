import { render, screen } from "@testing-library/react";
import { format, getISOWeek, nextSaturday, previousMonday } from "date-fns";
import { AarType, DagType, UkeType } from "../../types/DayTypes";
import { Today } from "./Today";

describe("Today", () => {
  const enMandag = new Date("2022-10-03");
  const enLørdag = new Date("2022-10-08");
  const enSøndag = new Date("2022-10-09");
  const ukenummer = 40;
  const schedule: AarType[] = [
    {
      year: 2022,
      weeks: [
        {
          weekNumber: ukenummer,
          days: [
            {
              date: format(enMandag, "yyyy-MM-dd"),
              name: "Kid 1",
            },
          ],
        },
      ],
    },
  ];

  test("viser en ukedag", () => {
    render(<Today dagensDato={enMandag} walkingSchedule={schedule} />);
    expect(screen.getByText(/^I dag er det mandag$/)).toBeVisible();
    expect(screen.getByText(/^Kid 1$/)).toBeVisible();
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

  // test("viser fri på dager som er i ferieuker", () => {
  //   const scheduleMedFerie: AarType = {
  //     [ukenummer]: {
  //       erFerieUke: true,
  //     },
  //   };
  //   render(<Today dagensDato={enMandag} walkingSchedule={scheduleMedFerie} />);
  //   expect(screen.getByText(/^I dag er det mandag$/)).toBeVisible();
  //   expect(screen.getByText(/^Fri hele uka!$/)).toBeVisible();
  // });

  // test("viser melding om fri på enkelt-dager som er markert med fri", () => {
  //   const ukenummer = "40";
  //   const schedule: AarType = {
  //     [ukenummer]: {
  //       dager: [
  //         {
  //           familie1: "Familie 1",
  //           familie2: "Familie 2",
  //           erFridag: true,
  //           beskrivelseAvFridag: "Planleggingsdag!",
  //         },
  //       ],
  //     },
  //   };

  //   render(<Today dagensDato={enMandag} walkingSchedule={schedule} />);
  //   expect(screen.getByText(/^I dag er det mandag$/)).toBeVisible();
  //   expect(screen.getByText(/^Planleggingsdag!$/)).toBeVisible();
  // });
});
