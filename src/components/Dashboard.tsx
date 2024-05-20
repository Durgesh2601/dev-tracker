import React, { useEffect, useState } from "react";
import { fetchActivities } from "../api";
import { AuthorWorklogData, AuthorWorklog, ActivityMeta } from "../types/types";
import ActivityChart from "./ActivityChart";
import "./Dashboard.css";

const Dashboard: React.FC = () => {
  const [data, setData] = useState<AuthorWorklogData | null>(null);
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response: AuthorWorklogData = await fetchActivities();
      setData(response);
      setSelectedActivities(
        response?.AuthorWorklog?.activityMeta.map(
          (meta: ActivityMeta) => meta.label
        ) || []
      );
    };
    fetchData();
  }, []);

  const handleCheckboxChange = (label: string) => {
    setSelectedActivities((prevSelected) =>
      prevSelected.includes(label)
        ? prevSelected.filter((activity) => activity !== label)
        : [...prevSelected, label]
    );
  };

  return (
    <div className="container">
      <h1>Developer Activities Dashboard</h1>
      <div className="filter-container">
        {data?.AuthorWorklog?.activityMeta.map((meta: ActivityMeta) => (
          <label key={meta.label} className="filter-label">
            <input
              type="checkbox"
              checked={selectedActivities.includes(meta.label)}
              onChange={() => handleCheckboxChange(meta.label)}
            />
            <span className="checkbox-custom" />
            {meta.label}
          </label>
        ))}
      </div>
      <div className="chart-container">
        {data ? (
          data?.AuthorWorklog?.rows.map((row: AuthorWorklog) => (
            <ActivityChart
              key={row?.name}
              data={row}
              activityMeta={data?.AuthorWorklog?.activityMeta.filter(
                (meta: ActivityMeta) => selectedActivities.includes(meta.label)
              )}
            />
          ))
        ) : (
          <p>Loading data...</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
