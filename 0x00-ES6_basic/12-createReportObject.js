export default function createReportObject(employeesList) {
  const allEmployeesObj = {};
  let count = 0;
  for (const depName in employeesList) {
    if (Object.hasOwnProperty.call(employeesList, depName)) {
      count += 1;
      allEmployeesObj[depName] = employeesList[depName];
    }
  }
  return {
    allEmployees: allEmployeesObj,
    getNumberOfDepartments() {
      return count;
    },
  };
}
