import React, { useEffect, useState } from "react";
import { fetchActivities } from "../api";
import { AuthorWorklogData, AuthorWorklog } from "../types/types";
import ActivityChart from "./ActivityChart";
import "./Dashboard.css";

const Dashboard: React.FC = () => {
  const [data, setData] = useState<AuthorWorklogData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response: AuthorWorklogData = await fetchActivities();
      setData(response);
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>Developer Activities Dashboard</h1>
      <div className="chart-container">
        {data ? (
          data?.AuthorWorklog?.rows.map((row: AuthorWorklog) => (
            <ActivityChart
              key={row?.name}
              data={row}
              activityMeta={data?.AuthorWorklog?.activityMeta}
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
