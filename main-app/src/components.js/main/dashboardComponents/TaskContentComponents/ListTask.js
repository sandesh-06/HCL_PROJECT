import React, { useContext, useEffect } from 'react'
import taskContext from '../../../../context/task/taskContext'
import { Navigate } from 'react-router-dom'
import jwtDecode from 'jwt-decode'
import {AiOutlineEdit} from 'react-icons/ai'
import {AiOutlineDelete} from 'react-icons/ai'

export default function ListTask() {
    const context = useContext(taskContext)
    const {tasks, getProjectTasks, deleteTask} = context

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
    <div className=' bg-[#2f2b3a]  rounded-2xl overflow-auto text-center'>
        <span className='font-Quicksand text-[20px] text-white font-extrabold text-center'>Tasks</span>
         {tasks.length === 0 &&  <div className="flex justify-center items-center text-[30px] font-bold mt-10 opacity-40 text-slate-400">No tasks to display</div>}
         {tasks.map((target)=>{
            return <div key={target.tid} className="bg-[#46424f] p-3 m-1 rounded-sm text-start font-Quicksand text-[17px] font-bold">
                    <div>{target?.tname}</div>
                    <div className='flex justify-between'>
                       <span className='text-[#a688fa]'>{target.employee?.name}</span> 
                       <div className='flex'>
                       <span className='text-[20px] mx-3 cursor-pointer'><AiOutlineEdit/></span>
                        <span className='text-[20px] mx-3 cursor-pointer'><AiOutlineDelete onClick={()=>deleteTask(target._id, managerId)}/></span>
                       </div>
                        </div>
                </div>
        })}
    </div>
  )
}
