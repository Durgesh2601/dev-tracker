import { AuthorWorklogData } from "../types/types";

export const fetchActivities = async (): Promise<AuthorWorklogData> => {
  try {
    const response = await fetch("/activities.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: { data: AuthorWorklogData } = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching data: ", error);
    throw error;
  }
};
