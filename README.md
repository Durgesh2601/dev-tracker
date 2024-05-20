# Developer Activities Dashboard

## Overview

The Developer Activities Dashboard is a web application designed to visualize the activities of developers. It provides insights into various metrics such as pull requests (PRs) opened, PRs merged, commits, PR reviews, PR comments, incident alerts, and incidents resolved over a period of time. Users can filter activities using checkboxes to customize the displayed data.

### Deployed Link

[[Developer Activities Dashboard](https://dev-tracker-three.vercel.app/)](https://dev-tracker-three.vercel.app/)

## Features

- **Activity Visualization**: Displays a bar chart of developer activities.
- **Interactive Filters**: Allows users to filter activities using checkboxes.
- **Responsive Design**: Ensures the dashboard is accessible on various devices.
- **Dynamic Data Fetching**: Fetches data from an API and dynamically updates the charts.
- **Error Handling**: Implements an error boundary with a fallback component to handle errors gracefully.

## Tech Stack

- **React**: JavaScript library for building user interfaces.
- **TypeScript**: Typed superset of JavaScript for improved development experience.
- **Recharts**: Library for building charts in React.
- **CSS**: Styling the components to create an interactive and responsive design.
- **Vercel**: Platform for deploying the application.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Durgesh2601/dev-tracker.git
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the application.

## Project Structure

- **src/components/ActivityChart.tsx**: Component for rendering the bar chart of activities.
- **src/components/Dashboard.tsx**: Main component for the dashboard, including filters and charts.
- **src/components/ErrorBoundary.tsx**: Error boundary component to catch and handle errors.
- **src/components/FallbackComponent.tsx**: Fallback UI component to display when an error is caught by the error boundary.
- **src/api/index.ts**: API function to fetch activities data.
- **src/types/types.ts**: TypeScript types used in the application.
- **src/App.tsx**: Root component of the application.
- **src/index.tsx**: Entry point of the application.
- **src/styles/Dashboard.css**: CSS styles for the dashboard and filters.

## Usage

1. **Dashboard**: The main view displaying a list of developers and their activities.
2. **Filters**: Checkboxes at the top allow users to select which activities to display on the chart.
3. **Charts**: Visual representation of the selected activities over time for each developer.

## Development

- **React Components**: The application is structured using functional components.
- **State Management**: `useState` and `useEffect` hooks are used to manage state and side effects.
- **Dynamic Rendering**: The chart data is dynamically rendered based on the selected filters.
- **Error Handling**: The `ErrorBoundary` component is used to catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed.

## Deployment

The application is deployed on Vercel. You can access it via the following link:

[https://dev-tracker-three.vercel.app/](https://dev-tracker-three.vercel.app/)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request or open an issue to improve the application.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

---

**Author**: Durgesh Kumar Singh

Feel free to contact me at [dk829445@gmail.com](mailto:dk829445@gmail.com) for any questions or feedback.
