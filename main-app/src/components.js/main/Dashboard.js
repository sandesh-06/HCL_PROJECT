import React from 'react'
import Navbar from './Navbar'
import TeamList from './dashboardComponents/TeamList'
import TaskContent from './dashboardComponents/TaskContent'
import TeamStats from './dashboardComponents/RadialChart/TeamStats'
import PieChart from './dashboardComponents/PieChart'
import GanttChart from './dashboardComponents/GanttChart'
import BarChart  from './dashboardComponents/BarChart'
export default function Dashboard() {
  
  return (
    <>
    <Navbar/>
    <div className='grid grid-cols-4 grid-rows-4 w-screen h-screen gap-5 p-4 ml-[250px]'>
       <div className='col-span-3 row-span-4 bg-[#2f2b3a]  rounded-2xl grid grid-cols-3 grid-rows-2'>
        <BarChart/>
         <GanttChart/>
  
        <div className='col-start-3 flex flex-col'>
        <TeamStats/>
       <PieChart/>
        </div>
       </div>

       <TaskContent/>
       <TeamList/>
     </div>
    </>
  )
}
