export interface DagType {
  familie1: string;
  familie2: string;
  matservering?: boolean;
}

export interface UkeType {
  erFerieUke?: boolean;
  dager?: DagType[];
}

export interface AarType {
  [key: string]: UkeType;
}

export interface WalkingScheduleType {
  [key: string]: AarType;
}

export interface DayProps {
  dagensDato: Date;
  // walkingSchedule: WalkingScheduleType;
  walkingSchedule: AarType;
}

export interface TodayProps extends DayProps {}

export interface TomorrowProps extends DayProps {}

export interface WeekScheduleProps extends DayProps {}

export interface ScheduleProps extends DayProps {}
