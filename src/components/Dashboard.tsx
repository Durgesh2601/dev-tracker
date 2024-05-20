import React, { useEffect, useState } from "react";
import { fetchActivities } from "../api";
import { DeveloperActivity } from "../types/types";

const Dashboard: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<DeveloperActivity[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const activities = await fetchActivities();
        setData(activities);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Developer Activities Dashboard</h1>
      {/* Render charts, tables, and other UI components here */}
    </div>
  );
};

export default Dashboard;
