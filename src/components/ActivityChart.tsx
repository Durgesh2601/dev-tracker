import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from "recharts";
import { AuthorWorklog, ActivityMeta } from "../types/types";
import './ActivityChart.css';

interface ActivityChartProps {
  data: AuthorWorklog;
  activityMeta: ActivityMeta[];
}

const ActivityChart: React.FC<ActivityChartProps> = ({ data, activityMeta }) => {
  const chartData = activityMeta.map((meta) => {
    const activity = data.totalActivity.find((a) => a.name === meta.label);
    return {
      name: meta.label,
      value: activity ? Number(activity.value) : 0,
      fill: meta.fillColor,
    };
  });

  return (
    <div className="chart-wrapper">
      <h3>{data?.name}</h3>
      <BarChart width={600} height={300} data={chartData} className="chart">
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        {chartData?.map((entry, index) => (
          <Bar key={`bar-${index}`} dataKey="value" fill={entry.fill} />
        ))}
      </BarChart>
    </div>
  );
};

export default ActivityChart;