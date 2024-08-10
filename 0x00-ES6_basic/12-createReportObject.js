export default function createReportObject(employeesList) {
  report = {
    allEmployees: employeesList,
    getNumberOfDepartments() {
      return allEmployees.length;
    },
  };

  return report
}
