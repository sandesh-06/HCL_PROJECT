import React, { useContext, useEffect } from 'react'
import taskContext from '../../../context/task/taskContext'
import TaskItems from './alignComponents/TaskItems'
import { Navigate } from 'react-router-dom'
import jwtDecode from 'jwt-decode'

export default function TaskDisplay() {
    const context = useContext(taskContext)
    const {tasks, getProjectTasks} = context

    const token = localStorage.getItem(("token"))
    //decoding the manager id from auth token
    const decodedToken = jwtDecode(token)

    const managerId = decodedToken.manager.id
    useEffect(() => {
        if (localStorage.getItem(("token"))) {
            getProjectTasks(managerId);
        }
        <Navigate to="/" />;
        // eslint-disable-next-line
      }, []);
    

  return (
    <div className='col-span-2 row-span-2 bg-[#2f2b3a]  rounded-2xl overflow-auto'>
         <div className='text-center text-white font-Quicksand text-[30px] font-extrabold'>Tasks</div>
         {tasks.length === 0 &&  <div className="flex justify-center items-center text-[30px] font-bold mt-10 opacity-40 text-slate-400">No tasks to display</div>}
         {tasks.map((target)=>{
            return <div className={`bg-[#46424f] p-3 m-1 rounded-3xl row-span-2 grid grid-cols-2 gap-2`}>
                    <TaskItems label="Task" value={target?.tname}/>
                    <TaskItems label="Task ID" value={target?.tid}/>
                    <TaskItems label="Project ID" value={target.project?.pid}/>
                    <TaskItems label="Who's workin?" value={target.employee?.name}/>
                    {target.status === 'Ongoing' && <span className='w-5 h-5 rounded-full mx-3 top-0 right-3 bg-orange-400'></span>}
                    {target.status === 'Completed' && <span className='w-5 h-5 rounded-full mx-3 top-0 right-3 bg-green-400'></span>}
                </div>
        })}
    </div>
  )
}
