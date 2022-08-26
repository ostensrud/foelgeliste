interface DayProps {
  dagensDato: Date;
  walkingSchedule: Object;
}

export interface TodayProps extends DayProps {}

export interface TomorrowProps extends DayProps {}
