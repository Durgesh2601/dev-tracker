import { ReactNode } from "react";

export interface ActivityMeta {
  label: string;
  fillColor: string;
}

export interface TotalActivity {
  name: string;
  value: string;
}

export interface DayWiseActivityItem {
  count: string;
  label: string;
  fillColor: string;
}

export interface DayWiseActivity {
  date: string;
  items: {
    children: DayWiseActivityItem[];
  };
}

export interface ActiveDays {
  days: number;
  isBurnOut: boolean;
  insight: string[];
}

export interface AuthorWorklog {
  name: string;
  totalActivity: TotalActivity[];
  dayWiseActivity: DayWiseActivity[];
  activeDays: ActiveDays;
}

export interface AuthorWorklogData {
  AuthorWorklog: any;
  activityMeta: ActivityMeta[];
  rows: AuthorWorklog[];
}

export interface ErrorBoundaryProps {
  children: ReactNode;
  fallback: ReactNode;
}

export interface ErrorBoundaryState {
  hasError: boolean;
}
