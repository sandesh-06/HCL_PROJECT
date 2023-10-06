const express = require('express');
const router = express.Router();

const Employee = require('../models/EmployeeData'); // Import your Employee model

router.get('/:managerId', async (req, res) => {
  try {
    const managerId = req.params.managerId;
    const employees = await Employee.find({ 'manager': managerId });

    res.json(employees);
  } catch (error) {
    res.status(500).json({ error: 'Some error occured while fetching the team members' });
  }
});

module.exports = router;
