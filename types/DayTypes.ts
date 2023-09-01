export interface DagType {
  // familie1: string;
  // familie2: string;
  // matservering?: boolean; // deprecated
  date: string;
  name: string;
  erFridag?: boolean;
  beskrivelseAvFridag?: string;
}

export interface UkeType {
  weekNumber: number;
  days?: DagType[];
  // erFerieUke?: boolean;
  // dager?: DagType[];
}

export interface AarType {
  year: number;
  weeks?: UkeType[];
  // [key: string]: UkeType;
}

// export interface WalkingScheduleType {
//   [key: string]: AarType;
// }

export interface DayProps {
  dagensDato: Date;
  walkingSchedule: AarType[];
}

export interface TodayProps extends DayProps {}

export interface TomorrowProps extends DayProps {}

export interface WeekScheduleProps extends DayProps {}

export interface ScheduleProps extends DayProps {}
