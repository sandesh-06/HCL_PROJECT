import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Employee", "Task Weightage"],
  ["Emp1", 11],
  ["Emp2", 6],
  ["Emp3", 8],
  ["Emp4", 4],
];

export const options = {
    //  backgroundColor: {
    //     fill: '#2f2b3a',
    //     fillOpacity: 1
    //   },
  title: "Team's work split",
  titleTextStyle: {
      color: "black",
    fontName: 'Quicksand', 
    fontSize: 23, 
    bold: true,   
},
  is3D: true,
};


export default function PieChart() {
  return (
    <div className='mb-3 mr-3 ml-2 p-2 rounded-md text-center font-Quicksand bg-white h-[252px]'>
         <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"99%"}
      height={"240px"}
    />
    </div>
  )
}
