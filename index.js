// // Your code here
function createEmployeeRecord(row) {
     return{
        firstName: row[0],
         familyName: row[1],
         title: row[2],
         payPerHour: row[3],
         timeInEvents: [],
         timeOutEvents: [],
    }
 }

 let createEmployees = function(employeeRowData) {
    let createEmployeeRecords = function(employeeRowData) {
        return employeeRowData.map(function(row){
            return createEmployeeRecord(row)
        })
    }
}
// let createEmployees = function(employeeRowData) {
//     let createEmployeeRecords = function(employeeRowData) {
//         return employeeRowData.map(function(row){
//             return createEmployeeRecord(row)
//         })
//     }
// }
// function createTimeInEvent(employee, timeStamp) {
//         let [date, hour] = timeStamp.split("")

//         employee.timeInEvents.push({
//             type: "TimeIn",
//             hour: parseInt(hour, 10),
//             date,
//         })

//         return employee;
//     }

//     function createTimeOutEvent(employee, timeStamp) {
//         let [date, hour] = timeStamp.split("")

//         employee.timeOutEvents.push({
//             type: "TimeOut",
//             hour: parseInt(hour, 10),
//             date,
//         })

//         return employee;
//     }
