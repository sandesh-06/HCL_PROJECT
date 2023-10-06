import employeeContext from "./employeeContext";
import {  useState } from "react";


export default function EmployerState(props) {
    //state for manager
    const blankEmployee = [];
    const [employee, setEmployee] = useState(blankEmployee);

    

    const getEmployee = async (managerId) => {
    const response = await fetch(`http://localhost:5000/api/get-team/${managerId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });

    const employeeDetails = await response.json();
    setEmployee(employeeDetails);
  };

 
     
  return (
   <employeeContext.Provider
   value={{employee, getEmployee}}
   >
    {props.children}
   </employeeContext.Provider>
  )
}
