const express = require('express');
const router = express.Router();

const Project = require('../models/ProjectData')
const Task = require('../models/TaskData'); 
const fetchManager = require('../middleware/fetchManager');

//ROUTE 1: TO GET THE TASKS FOR A PARTICULAR MANAGER'S PROJECT
router.get('/project-tasks/:managerId', async(req, res)=>{
    try{
        //get the manager's id from the parameter
        const managerId = req.params.managerId;

        //retrieve the projects of the manager
        const managerProjects = await Project.find({ 'manager': managerId });
    
        //access the project id of each project and find the tasks for the project
        const tasksForManager = [];
        for (const project of managerProjects) {
        const tasks = await Task.find({ "project": project._id }).populate('project').populate('employee');
        tasksForManager.push(...tasks);
        }
        res.json(tasksForManager);

    }
    catch{
        res.status(500).json({ error: "Couldn't fetch tasks for the project" });
    }
})

//ROUTE 2: TO ADD A TASK GETTING PROJECT ID AND EMPLOYEE ID
router.post( "/add-task/:projectId/:employeeId", async (req, res) => {
      try {
        //destructure the necessary from the body
        const { tname, tid, dueDate } = req.body;
        //creating a note to add
        const task = await Task.create({
          tname,
          tid,
          project: req.params.projectId,
          employee: req.params.employeeId,
          dueDate
        });
        const savedTask = await task.save();
        res.json({ savedTask });
      } catch (error) {
        console.log(error.message)
        return res.status(500).send({ error: "Couldn't add task" });
      }
    }
  );

  //ROUTE 3 : TO DELETE THE TASKS
  router.delete("/delete-task/:taskId", fetchManager, async (req, res) => {
    try {
      const { managerId } = req.body
      //find the task to be deleted
      let task = await Task.findById(req.params.taskId);
      if (!task) {
        return res.status(404).json({ error: "Task doesn't exists" });
      }
  
      //if task found, then check if the task belongs to the logined user
      if (managerId.toString() !== req.manager.id) {
        return res.status(401).send("Not allowed");
      }
  
      task = await Task.findByIdAndDelete(req.params.taskId);
      res.send("Task Deleted Successfully");
    } catch (error) {
      console.error(error.message);
      return res.status(500).send({ error: "Couldn't delete task" });
    }
  });
module.exports = router;