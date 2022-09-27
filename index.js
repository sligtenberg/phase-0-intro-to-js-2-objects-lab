// Write your solution in this file!
const employee = {
    name: "Stephen Ligtenberg",
    streetAddress: "122 S Roberson"
}

function updateEmployeeWithKeyAndValue(employeeObject, key, value) {
    const newEmployeeObject = {...employeeObject};
    newEmployeeObject[key] = value;
    return newEmployeeObject
}

function destructivelyUpdateEmployeeWithKeyAndValue(employeeObject, key, value) {
    employeeObject[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employeeObject, key) {
    const newEmployeeObject = {...employeeObject};
    delete newEmployeeObject[key];
    return newEmployeeObject;
}

function destructivelyDeleteFromEmployeeByKey(employeeObject, key) {
    delete employeeObject[key];
    return employeeObject;
}