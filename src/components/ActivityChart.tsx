import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";
import { AuthorWorklog, ActivityMeta } from "../types/types";
import "./ActivityChart.css";

interface ActivityChartProps {
  data: AuthorWorklog;
  activityMeta: ActivityMeta[];
}

const ActivityChart: React.FC<ActivityChartProps> = ({
  data,
  activityMeta,
}) => {
  const chartData = activityMeta.map((meta) => {
    const activity = data.totalActivity.find((a) => a.name === meta.label);
    return {
      name: meta.label,
      [meta.label]: activity ? Number(activity.value) : 0,
      fill: meta.fillColor,
    };
  });

  return (
    <div className="chart-wrapper">
      <h3>{data.name}</h3>
      <BarChart width={1000} height={300} data={chartData} className="chart">
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        {activityMeta.map((meta, index) => (
          <Bar
            key={`bar-${index}`}
            dataKey={meta.label}
            fill={meta.fillColor}
          />
        ))}
      </BarChart>
    </div>
  );
};

export default ActivityChart;