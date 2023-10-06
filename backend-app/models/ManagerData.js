const mongoose = require('mongoose')

const ManagerSchema = new mongoose.Schema({
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
    department:{
        dname: { 
            type: String,
            required: true
        },
        dID: {
            type: Number,
            required: true,
            unique: true
        }
    },
    dob:{
        type: Date,
        required: true
    },
    joinedDate:{
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model("Manager", ManagerSchema)

/* department ids:
    
1. Product Mangement (PM): 100
2. HR: 101
3. Quality Assurance (QA): 102
4. Sales and Marketing (SM): 103
5. Design Team (DT): 104

*/