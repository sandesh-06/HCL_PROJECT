import React, { useContext, useEffect } from 'react'
import projectContext from '../../../context/project/projectContext'
import DetailItem from './alignComponents/DetailItem'
import Navigate from '../navbarComponents/Navigate'
import jwtDecode from 'jwt-decode'

export default function CurrentProject() {
    const context = useContext(projectContext)
    const {projects, getManagerProjects} = context

    const token = localStorage.getItem(("token"))
    //decoding the manager id from auth token
    const decodedToken = jwtDecode(token)

    const managerId = decodedToken.manager.id
    useEffect(() => {
        if (localStorage.getItem(("token"))) {
            getManagerProjects(managerId);
        }
        <Navigate to="/" />;
        // eslint-disable-next-line
      }, []);
    

  return (
    <div className='col-span-2 row-span-2 bg-[#2f2b3a]  rounded-2xl grid grid-rows-5 '>
        <div className='text-center text-white font-Quicksand text-[30px] font-extrabold'>Assigned Projects</div>
         {projects.length === 0 &&  <div className="flex justify-center items-center text-[30px] font-bold w-full h-full text-slate-400">You don't have any projects assigned...</div>}
        {projects.map((target)=>{
            return <div className="bg-[#46424f] p-3 m-1 rounded-3xl row-span-2">
                    <DetailItem label="Project Name" value={target.pname}/>
                    <DetailItem label="Project ID" value={target.pid}/>
                </div>
        })}
    </div>
  )
}
