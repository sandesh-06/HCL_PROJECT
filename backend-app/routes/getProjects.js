const express = require('express');
const router = express.Router();

const Project = require('../models/ProjectData'); 

//ROUTE 1: TO GET ALL PROJECTS
router.get('/all', async(req, res)=>{
    try{
        const allProjects = await Project.find().populate('manager')
        res.json(allProjects)
    }
    catch{
        res.status(500).json({ error: 'Failed to fetch all the projects' });
    }
})

//ROUTE 2: TO GET THE THE PROJECT OF A PARTICULAR MANAGER
router.get('/specific/:managerId', async (req, res) => {
  try {
    const managerId = req.params.managerId;
    const projects = await Project.find({ 'manager': managerId });

    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: "Couldn't fetch the project of the manager" });
  }
});

module.exports = router;
