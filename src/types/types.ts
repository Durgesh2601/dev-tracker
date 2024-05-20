export interface ActivityMeta {
  label: string;
  fillColor: string;
}

export interface TotalActivity {
  name: string;
  value: string;
}

export interface DayWiseActivity {
  date: string;
  items: {
    children: {
      count: string;
      label: string;
      fillColor: string;
    }[];
  };
}

export interface AuthorWorklog {
  name: string;
  totalActivity: TotalActivity[];
  dayWiseActivity: DayWiseActivity[];
  activeDays: {
    days: number;
    isBurnOut: boolean;
    insight: string[];
  };
}

export interface AuthorWorklogData {
  activityMeta: ActivityMeta[];
  rows: AuthorWorklog[];
}
