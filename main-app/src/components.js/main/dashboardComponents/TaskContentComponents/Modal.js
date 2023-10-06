import React, { useContext, useEffect, useState } from "react";
import projectContext from "../../../../context/project/projectContext";
import employeeContext from "../../../../context/employee/employeeContext";
import taskContext from "../../../../context/task/taskContext";
// import { useNavigate } from "react-router-dom";

import jwtDecode from "jwt-decode";
export default function Modal(props) {

 
    const closeModal=(e)=>{
        if(e.target.id === 'container' || e.target.id === 'close' ){
          props.setShowModal(false)
        }
    }
  //getting the contexts
  const projContext = useContext(projectContext);
  const empContext = useContext(employeeContext);
  const toAddTaskContext = useContext(taskContext)

  const { projects, getManagerProjects } = projContext;
  const { employee, getEmployee } = empContext;
  const { addTask } = toAddTaskContext

  const [task, setTask] = useState({tname: "", tid: "", project: "", employee: "", dueDate: ""})
  const decodedToken = jwtDecode(localStorage.getItem("token"));
  const managerId = decodedToken.manager.id;
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getManagerProjects(managerId);
      getEmployee(managerId);
    }
    // eslint-disable-next-line
  }, []);
  


  const handleAddTask = (e) =>{
    setTask({...task, [e.target.name]: e.target.value})
    console.log({...task, [e.target.name]: e.target.value})
  }
  
    const handleSubmit = async(e) =>{
      e.preventDefault();
     
      if (task.dueDate) {
          const changedDueDate = new Date(task.dueDate).toISOString();
          // console.log(task)
          addTask(task.tname, task.tid, changedDueDate, task.project, task.employee);
          // setTask({tname: "", tid: "", project: "", employee: "", dueDate: ""})
          
        } else {
          addTask(task.tname, task.tid, null, task.project, task.employee); // or pass an appropriate default value
          // setTask({tname: "", tid: "", project: "", employee: "", dueDate: ""})
        }
        // Fetch updated tasks and set them in the state
        // const updatedTasks = await getProjectTasks(managerId);
        // console.log(updatedTasks)
        // setTask(updatedTasks);
        setTask({tname: "", tid: "", project: "", employee: "", dueDate: ""})
    }
  

            
  return (
    <>
       <div id="container" className="fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center" onClick={closeModal}>
        <div className="bg-[#46424f] w-1/2 h-1/2 p-10 rounded-md">
          <form onSubmit={handleSubmit}>
            <div className="px-3 mb-3">
              <label className="font-Quicksand text-[20px] font-extrabold">
                Project Title:
                <select
                name="project"
                   value={task.project}
                   onChange={handleAddTask}
                  className="bg-white mx-3 rounded-lg text-black font-Quicksand font-bold text-[20px]"
                >
                  <option value="">Select Project Title</option>
                  {projects.map((project) => (
                    <option key={project.id} value={project._id}>
                      {project.pname}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="tname"
                  id="tname"
                  className="block py-2.5 px-0 w-full text-[20px] font-Quicksand bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#a688fa] focus:outline-none focus:ring-0 focus:border-[#a688fa] peer"
                  value={task.tname}
                  onChange={handleAddTask}
                  placeholder="What's the task?"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="number"
                  name="tid"
                  id="tid"
                  className="block py-2.5 px-0 w-full text-[20px] font-Quicksand bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#a688fa] focus:outline-none focus:ring-0 focus:border-[#a688fa] peer"
                  value={task.tid}
                  onChange={handleAddTask}
                  placeholder="Task ID"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="date"
                  name="dueDate"
                  id="dueDate"
                  className="block py-2.5 px-0 w-full text-[20px] font-Quicksand bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#a688fa] focus:outline-none focus:ring-0 focus:border-[#a688fa] peer"
                  value={task.dueDate}
                  onChange={handleAddTask}
                  placeholder="2023-10-05"
                  required
                />
                <label
                  htmlFor="dueDate"
                  className="peer-focus:font-medium absolute font-extrabold text-white text-[20px] dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#a688fa] peer-focus:dark:text-[#a688fa] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                 
                </label>
              </div>
            </div>

            <div className="p-3 my-3">
              <label className="font-Quicksand text-[20px] font-extrabold">
                Status
                <select
                  className="bg-white mx-3 rounded-lg text-black font-Quicksand font-bold text-[20px]"
                >
                  <option value="Ongoing">Ongoing</option>
                </select>
              </label>
            </div>
            
            <div className="p-3 my-3">
              <label className="font-Quicksand text-[20px] font-extrabold">
                Assign task to:
                <select
                  name="employee"
                  value={task.employee}
                  onChange={handleAddTask}
                  className="bg-white mx-3 rounded-lg text-black font-Quicksand font-bold text-[20px]"
                >
                  <option value="">Select Member</option>
                  {employee.map((emp) => (
                    <option key={emp.id} value={emp._id}>
                      {emp.name}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <button
              type="submit"
              className="text-white bg-[#a688fa] text-[15px] font-Quicksand font-bold hover:bg-[#7a5af5] focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
             Add Task
            </button>
            <button
              type="button"
              id="close"
              className="text-[#a688fa] border-[#a688fa] border-2 mx-3 text-[15px] font-Quicksand font-bold hover:bg-[#7a5af5] focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={closeModal}
            >
             Cancel
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
