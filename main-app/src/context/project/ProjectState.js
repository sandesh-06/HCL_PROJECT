import projectContext from "./projectContext";
import {  useState } from "react";


export default function ProjectState(props) {

    const [projects, setProjects] = useState([]);

    
    //REQUEST TO FETCH ALL THE PROJECTS
    const getAllProjects = async () => {
    const response = await fetch(`http://localhost:5000/api/get-project/all`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });

    const allProjects = await response.json();
    setProjects(allProjects);
  };

  //REQUEST TO FETCH THE PROJECTS OF SPECIFIC MANAGER
  const getManagerProjects = async(managerId)=>{
    const response = await fetch(`http://localhost:5000/api/get-project/specific/${managerId}`,{
        method: "GET",
        headers:{
            "Content-Type": "application/json"
        }
    })

    const managerProjects = await response.json()
    setProjects(managerProjects)
  }
 
     
  return (
   <projectContext.Provider
   value={{projects, getAllProjects, getManagerProjects}}
   >
    {props.children}
   </projectContext.Provider>
  )
}
