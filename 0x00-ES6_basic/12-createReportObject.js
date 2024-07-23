export default function createReportObject(employeesList) {
  const all = {};
  let count = 0;

  for (const item of employeesList) {
    count += 1;
    all[item.departmentName] = [...item.employees];
  }
  const finalObject = {
    allEmployees: all,
    getNumberOfDepartments() {
      return count;
    },
  };
  return finalObject;
}
