const mongoose = require('mongoose')
const ManagerData = require('./ManagerData')

const ProjectSchema = new mongoose.Schema({
    pname:{
        type: String,
        required: true
    },
    pid:{
        type: String,
        required: true,
        unique: true
    },
    pdescription:{
        type: String
    },
    startDate:{
        type: Date,
        required: true
    },
    endDate:{
        type: Date,
        required: true
    },
    manager: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Manager'
    }
})

module.exports = mongoose.model("Project", ProjectSchema)

/* department ids:
    
1. Product Mangement (PM): 100
2. HR: 101
3. Quality Assurance (QA): 102
4. Sales and Marketing (SM): 103
5. Design Team (DT): 104

*/