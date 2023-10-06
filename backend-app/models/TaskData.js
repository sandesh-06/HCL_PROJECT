const mongoose = require('mongoose')
const EmployeeData = require('./EmployeeData')
const ProjectData = require('./ProjectData')
const TaskSchema = new mongoose.Schema({
    tname:{
        type: String,
        required: true
    },
    tid:{
        type: String,
        required: true,
        unique: true
    },
    project:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Project'
    },
    employee: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Employee'
    },
    status:{
      type: String,
      default: "Ongoing"
    },
    dueDate:{
        type: Date,
        required: true
    }

})


//to check if the start date and end date of the tasks lies between the project dates
TaskSchema.pre('save', async function(next) {
    try {
      const project = await mongoose.model('Project').findById(this.project);
      if (this.dueDate >= project.startDate && this.dueDate <= project.endDate) {
        next();
      } else {
        throw new Error('Task due dates must be within project dates');
      }
    } catch (error) {
      next(error);
    }
  });
  

module.exports = mongoose.model("task", TaskSchema)

/* department ids:
    
1. Product Mangement (PM): 100
2. HR: 101
3. Quality Assurance (QA): 102
4. Sales and Marketing (SM): 103
5. Design Team (DT): 104

*/