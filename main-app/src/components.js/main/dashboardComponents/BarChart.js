import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Sales", "Expenses", "Profit"],
  ["2020", 1000, 400, 200],
  ["2021", 1170, 460, 250],
  ["2022", 660, 1120, 300],
  ["2023", 1030, 540, 350],
];

export const options = {
  chart: {
    title: "'Time Sensitive Projects: Igniting Company's Success'",
    subtitle: "Sales, Expenses, and Profit: 2020-2023",
  },
};

export default function BarChart() {
  return (
    <div className="bg-white col-span-2 m-4 rounded-xl overflow-auto p-4 text-center">
      <span className="text-[30px] font-Quicksand font-extrabold p-2 m-3">
       Company's Performance
      </span>
      <Chart
        chartType="Bar"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </div>
  );
}
