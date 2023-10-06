import React, {useContext, useEffect} from 'react'
import Navbar from './Navbar'
import {Navigate} from 'react-router-dom'
import employeeContext from '../../context/employee/employeeContext'
import DetailItem from './homeComponents/alignComponents/DetailItem'
import jwtDecode from 'jwt-decode'


export default function Team() {
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
    <Navbar/>
      <div className='grid grid-cols-4 grid-rows-4  gap-5 p-4 ml-[250px] w-screen min-h-screen overflow-auto'>
        {employee.length===0 &&  <div className='col-span-2 row-span-2 bg-[#2f2b3a] rounded-2xl flex justify-center items-center text-[20px] text-white font-extrabold'> You don't have any team members yet... </div>}
        {employee.map((target)=>{
          return <div className='col-span-2 row-span-2 bg-[#2f2b3a] rounded-2xl flex p-11'>
                    <div  key={target.empid} >
                    <DetailItem  key={target.name} label="Name" value={target.name} />
                    <DetailItem  key={target.empid} label="Employee ID" value={target.empid} />
                    <DetailItem  key={target.dname} label="Dept Name" value={target.dname} />
                    <DetailItem  key={target.email} label="Email" value={target.email} />
                    </div>
                    <div className="w-full flex justify-end">
                        <img
                            src="https://srcwap.com/wp-content/uploads/2022/08/abstract-user-flat-4.png"
                            alt="Manager"
                            className="w-1/2 h-1/2 bg-indigo-500 border-[#9171f8] border-2 rounded-full shadow-2xl hover:border-white "
                        />
                     </div>  
                  </div>
        })}
       
      </div>
    </>
  )
}
