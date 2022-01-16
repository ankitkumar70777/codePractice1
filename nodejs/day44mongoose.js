const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const employeeSchema = new Schema({
    
    employeeName : {
        type: String,
    },
    employeeMob : {
        type : String,
    },
    address : {
        type : String,
    },
});

//for crud operation

//employee_details2 this is database name
const employeeModel = mongoose.model('employee_details2',employeeSchema);
module.exports = employeeModel;