import { render, screen } from "@testing-library/react";
import { subDays } from "date-fns";
import { AarType } from "../../types/DayTypes";
import { Tomorrow } from "./Tomorrow";

describe("Tomorrow", () => {
  const enMandag = new Date("2022-10-03");
  const enLørdag = new Date("2022-10-08");
  const enSøndag = new Date("2022-10-09");
  const ukenummer = "40";
  const nesteUke = "41";

  const schedule: AarType = {
    [ukenummer]: {
      dager: [
        { familie1: "Familie 1", familie2: "Familie 2" },
        { familie1: "Familie 3", familie2: "Familie 4" },
      ],
    },
    [nesteUke]: {
      dager: [
        {
          familie1: "Familie 4",
          familie2: "Familie 5",
        },
      ],
    },
  };

  test("tomorrow tomorrow, i love you tomorrow", () => {
    render(<Tomorrow dagensDato={enMandag} walkingSchedule={schedule} />);
    expect(screen.getByText(/^I morgen er det tirsdag$/)).toBeVisible();
  });

  test("viser at imorgen er fri når i morgen er en lørdag", () => {
    render(
      <Tomorrow dagensDato={subDays(enLørdag, 1)} walkingSchedule={schedule} />
    );
    expect(screen.getByText(/^I morgen er det lørdag$/)).toBeVisible();
    expect(screen.getByText(/^Da har vi fri!$/)).toBeVisible();
  });

  test("viser at imorgen er fri når i morgen er en søndag", () => {
    render(
      <Tomorrow dagensDato={subDays(enSøndag, 1)} walkingSchedule={schedule} />
    );
    expect(screen.getByText(/^I morgen er det søndag$/)).toBeVisible();
    expect(screen.getByText(/^Da har vi fri!$/)).toBeVisible();
  });

  test("viser mandag neste uke når i dag er søndag", () => {
    render(<Tomorrow dagensDato={enSøndag} walkingSchedule={schedule} />);
    expect(screen.getByText(/^I morgen er det mandag$/)).toBeVisible();
    expect(screen.getByText(/^Familie 4$/)).toBeVisible();
    expect(screen.getByText(/^Familie 5$/)).toBeVisible();
  });

  test("viser melding om fri på enkelt-dager som er markert med fri", () => {
    const ukenummer = "40";
    const schedule: AarType = {
      [ukenummer]: {
        dager: [
          {
            familie1: "Familie 1",
            familie2: "Familie 2",
          },
          {
            familie1: "Familie 1",
            familie2: "Familie 2",
            erFridag: true,
            beskrivelseAvFridag: "Julefri!",
          },
        ],
      },
    };

    render(<Tomorrow dagensDato={enMandag} walkingSchedule={schedule} />);
    expect(screen.getByText(/^I morgen er det tirsdag$/)).toBeVisible();
    expect(screen.getByText(/^Julefri!$/)).toBeVisible();
  });
});
