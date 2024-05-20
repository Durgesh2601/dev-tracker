export interface Activity {
  type: string;
  timestamp: string;
}

export interface DeveloperActivity {
  developer: string;
  activities: Activity[];
}
