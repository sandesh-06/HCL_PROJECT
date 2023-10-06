import taskContext from "./taskContext";
import {  useState } from "react";


export default function TaskState(props) {

    const [tasks, setTasks] = useState([]);

    
    //REQUEST TO FETCH ALL THE TASKS
    const getProjectTasks = async (managerId) => {
        const response = await fetch(`http://localhost:5000/api/get-task/project-tasks/${managerId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const ProjectTasks = await response.json();
        setTasks(ProjectTasks);
    };


   //TO ADD TASK
    const addTask = async(tname, tid, dueDate, projectId, employeeId)=>{
        const response = await fetch(`http://localhost:5000/api/get-task/add-task/${projectId}/${employeeId}`, {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ tname, tid, dueDate }),
        })

        const addedTasks = await response.json();
        console.log(addedTasks)
        setTasks(tasks.concat(addedTasks));
    }

    //TO DELETE A TASK
    const deleteTask = async(taskId, managerId)=>{
     try{
        await fetch(`http://localhost:5000/api/get-task/delete-task/${taskId}`,{
            method: "DELETE",
            headers:{
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
            body: JSON.stringify({managerId})
        })

        console.log("Task deleted with id: " + taskId)
        const newTasks = tasks.filter((task)=>{
            return task._id !== taskId //add all the tasks to new tasks except the one with the taskId
        })
        setTasks(newTasks) //set tasks as filtered new tasks
     }
     catch(e){
        console.error(e)
     }
        
    }
     
  return (
   <taskContext.Provider
   value={{tasks, getProjectTasks, addTask, deleteTask}}
   >
    {props.children}
   </taskContext.Provider>
  )
}
