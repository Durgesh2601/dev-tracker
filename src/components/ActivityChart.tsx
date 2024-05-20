import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";
import { DeveloperActivity } from "../types/types";

interface ActivityChartProps {
  data: DeveloperActivity[];
}

const ActivityChart: React.FC<ActivityChartProps> = ({ data }) => {
  const chartData = data.map((dev) => ({
    name: dev.developer,
    commits: dev.activities.filter((a) => a.type === "commit").length,
    pullRequestsOpened: dev.activities.filter(
      (a) => a.type === "pull_request_opened"
    ).length,
    pullRequestsMerged: dev.activities.filter(
      (a) => a.type === "pull_request_merged"
    ).length,
    meetings: dev.activities.filter((a) => a.type === "meeting").length,
    documentation: dev.activities.filter((a) => a.type === "documentation")
      .length,
  }));

  return (
    <BarChart width={600} height={300} data={chartData}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="commits" fill="#8884d8" />
      <Bar dataKey="pullRequestsOpened" fill="#82ca9d" />
      <Bar dataKey="pullRequestsMerged" fill="#ffc658" />
      <Bar dataKey="meetings" fill="#ff8042" />
      <Bar dataKey="documentation" fill="#8dd1e1" />
    </BarChart>
  );
};

export default ActivityChart;
