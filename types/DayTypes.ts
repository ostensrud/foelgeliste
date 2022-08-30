interface DagType {
  familie1: string;
  familie2: string;
}

export interface WalkingScheduleType {
  [key: string]: DagType[];
}

interface DayProps {
  dagensDato: Date;
  walkingSchedule: WalkingScheduleType;
}

export interface TodayProps extends DayProps {}

export interface TomorrowProps extends DayProps {}

export interface WeekScheduleProps extends DayProps {}

export interface ScheduleProps extends DayProps {}
