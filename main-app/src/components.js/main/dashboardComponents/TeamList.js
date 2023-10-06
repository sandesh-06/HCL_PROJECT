import React, {useContext, useEffect} from 'react'
import employeeContext from '../../../context/employee/employeeContext'
import jwtDecode from 'jwt-decode'
import Navigate from '../navbarComponents/Navigate';


export default function TeamList() {
    const context = useContext(employeeContext)

    //to get the manager details
    const {employee, getEmployee} = context;
  
    //retrieving the manager's id and getting employee for the manager 
    useEffect(() => {
     if(localStorage.getItem("token")){
      const decodedToken = jwtDecode(localStorage.getItem("token"))
      const managerId = decodedToken.manager.id
      getEmployee(managerId);
     }
       <Navigate to="/"/>
       // eslint-disable-next-line
    }, [])
  return (
   <>
     <div className='row-span-2 bg-[#2f2b3a]  rounded-2xl'>
     <p className='bg-gradient-to-r from-[#5e43f3] to-[#9171f8] text-transparent bg-clip-text text-center text-[40px] font-bold'>Team</p>
        {employee.length===0 &&  <div className='bg-[#2f2b3a] rounded-2xl flex justify-center items-center text-[20px] text-slate-500 font-semibold p-5'> No team members </div>}
        {employee.map((target, index)=>{
            return <div key={target.empid} className='p-2 m-2 bg-[#46424f] rounded-md'>
                    <p className='text-white text-[20px] font-Quicksand font-extrabold'>{index + 1}. {target.name}</p>
                </div>
        })}
     </div>
   </>
  )
}
