const mongoose = require('mongoose')
const ManagerData = require('./ManagerData')

const EmployeeSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    empid:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    dname: {
        type: String,
        required: true
    },
    dob:{
        type: Date,
        required: true
    },
    joinedDate:{
        type: Date,
        required: true,
        default: Date.now
    },
    manager: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Manager'
    }
})

module.exports = mongoose.model("Employee", EmployeeSchema)

/* department ids:
    
1. Product Mangement (PM): 100
2. HR: 101
3. Quality Assurance (QA): 102
4. Sales and Marketing (SM): 103
5. Design Team (DT): 104

*/