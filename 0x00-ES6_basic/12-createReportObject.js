export default function createReportObject(employeesList) {
  let allEmployeesObj = {};
  let count = 0;
  for (let depName in employeesList){
    count += 1;
    allEmployeesObj[depName] = employeesList[depName];
  }
  return {
    allEmployees: allEmployeesObj,
    getNumberOfDepartments(){
      return count;
    }
  }
}