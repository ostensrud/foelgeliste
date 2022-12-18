export interface DagType {
  familie1: string;
  familie2: string;
  matservering?: boolean; // deprecated
  erFridag?: boolean;
  beskrivelseAvFridag?: string;
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
  walkingSchedule: AarType;
}

export interface TodayProps extends DayProps {}

export interface TomorrowProps extends DayProps {}

export interface WeekScheduleProps extends DayProps {}

export interface ScheduleProps extends DayProps {}
