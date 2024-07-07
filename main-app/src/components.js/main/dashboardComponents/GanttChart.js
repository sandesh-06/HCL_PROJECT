import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";

export default function GanttChart() {
  const [projects, setProjects] = useState([]);
  
  useEffect(() => {
    // Fetch projects from your backend API
    fetch(`${process.env.REACT_APP_BACKEND_URL}/get-project/all`)
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  const columns = [
    { type: "string", label: "Task ID" },
    { type: "string", label: "Task Name" },
    { type: "string", label: "Resource" },
    { type: "date", label: "Start Date" },
    { type: "date", label: "End Date" },
    { type: "number", label: "Duration" },
    { type: "number", label: "Percent Complete" },
    { type: "string", label: "Dependencies" },
  ];

  const rows = projects.map((project) => [
    project.pid, // Task ID
    project.pname, // Task Name
    "", // Resource 
    new Date(project.startDate), // Start Date
    new Date(project.endDate), // End Date
    null, // Duration 
    74, // Percent Complete 
    null, // Dependencies 
  ]);

  const data = [columns, ...rows];

  const options = {
    height: 400,
    gantt: {
      trackHeight: 30,
    },
  };

  return (
    <div className="bg-white col-span-2 row-start-2 m-4 rounded-xl overflow-auto p-4 text-center">
      <span className="text-[30px] font-Quicksand font-extrabold p-2 m-3">All Project status</span>
      <Chart chartType="Gantt" width="100%" height="50%" data={data} options={options} />
    </div>
  );
}
