const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  Emp_id:Number,
  Emp_name:String,
  Emp_email:String,
  Emp_number:Number,
  Emp_gender:String,
  Emp_dept:String,
  Emp_loc:String
});

module.exports = mongoose.model('Employee', employeeSchema);