const express = require('express')
const router = express.Router()

const Manager = require('../models/ManagerData')
const Employee = require('../models/EmployeeData')

const {body, validationResult} = require('express-validator') 

const jwt = require('jsonwebtoken') //using jwt to send authentication token
const JWT_SECRET = "project+/project^status#$dashboard()for!an&IT=organization" //use this secret text to sign the auth token. NOTE: jwt secret should only be imported for env file, but for now this is fine.

const fetchManager = require('../middleware/fetchManager')
const fetchEmployee = require('../middleware/fetchEmployee')

/*

FOR API TESTING PURPOSE
using post request to store data into database
router.post('/', (req, res)=>{
    console.log(req.body)
    const storeManager = Manager(req.body)
    storeManager.save()
    res.send(req.body)
})

*/

//MAIN CODE:

//FOR MANAGER
//ROUTE 1 : LOGIN MANAGER AND GIVE AUTH TOKEN
router.post('/manager-login', [
    // Using express-validator to validate credentials
    body('password', 'Password cannot be blank').exists(),

    //creating a custom validator - "{digits: unique no for each emp}{2 chars: which is dname}{3dig: which is dID}"
    body('empid').custom(value => {
        if (!/^\d+[A-Z]{2}\d{3}$/.test(value)) {
            throw new Error('Invalid employee ID format.');
        }
        return true;
    })

], async (req, res) => {
    let success = false //to check the status - this will be used in the front-end for validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ success, errors: errors.array() });
    }

    //destructure empid and password from request body
    const {empid, password} = req.body

    //check if the empid exists in database
    try {
        
        const manager = await Manager.findOne({empid})
        if(!manager){
            return res.status(400).json({success, error: "Please enter a valid EMP ID"})
        }
        if (manager.password !== password) {
            return res.status(401).json({ success, error: "Incorrect Credentials" });
        }
        // res.send(manager)

        //after validating credentials, create a auth token

        //send the payload for auth token - the payload contains UniqueID and EMPID of the manager
        const payload =  {
            manager: {
                id: manager.id,
                empid: manager.empid
            }
        }

        //creating the auth token
        success = true
        const authToken = jwt.sign(payload, JWT_SECRET);
        res.json({success, authToken})

    }  catch(error){
        console.error(error.message)
        return res.status(500).send({error: "Manager login Error"})
    }
})

//ROUTE 2 : VERIFY MANAGER WITH AUTH TOKEN
router.post('/get-manager', fetchManager, async(req, res)=>{
    try {
        managerId = req.manager.id; //from fetchManager middlware
        // localStorage.setItem("managerId", managerId)
        const manager = await Manager.findById(managerId).select('-password') //to retrieve all the datas, except the password
        res.send(manager)
    } catch (error) {
        return res.status(500).send({error: "Couldn't get manager details"})
    }
})

//-------------------------------------------------------------------------------------------------------------------------------

//FOR EMPLOYEE
//ROUTE 1: LOGIN EMPLOYEE AND GIVE AUTH TOKEN
router.post('/employee-login', [
    // Using express-validator to validate credentials
    body('password', 'Password cannot be blank').exists(),

    //creating a custom validator - "{digits: unique no for each emp}{2 chars: which is dname}{3dig: which is dID}"
    body('empid').custom(value => {
        if (!/^EMP\d+[A-Z]{2}\d{3}$/.test(value)) {
            throw new Error('Invalid employee ID format.');
        }
        return true;
        
        
    })

], async (req, res) => {
    let success = false //to check the status - this will be used in the front-end for validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ success, errors: errors.array() });
    }

    //destructure empid and password from request body
    const {empid, password} = req.body

    //check if the empid exists in database
    try {
        
        const employee = await Employee.findOne({empid})
        if(!employee){
            return res.status(400).json({success, error: "Please enter a valid EMP ID"})
        }
        if (employee.password !== password) {
            return res.status(401).json({ success, error: "Incorrect Credentials" });
        }
        // res.send(employee)

        //after validating credentials, create a auth token

        //send the payload for auth token - the payload contains UniqueID and EMPID of the employee
        const payload =  {
            employee: {
                id: employee.id,
                empid: employee.empid
            }
        }

        //creating the auth token
        success = true
        const authToken = jwt.sign(payload, JWT_SECRET);
        res.json({success, authToken})

    }  catch(error){
        console.error(error.message)
        return res.status(500).send({error: "Employee Login failed"})
    }
})

//ROUTE 2 : VERIFY EMPLOYEE WITH AUTH TOKEN
router.post('/get-employee', fetchEmployee, async(req, res)=>{
    try {
        employeeId = req.employee.id; //from fetchManager middlware
        
        const employee = await Employee.findById(employeeId).select('-password') //to retrieve all the datas, except the password
        res.send(employee)
    } catch (error) {
        return res.status(500).send({error: "Couldn't fetch employee details"})
    }
})

module.exports = router



