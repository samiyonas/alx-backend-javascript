export default function createIteratorObject(report) {
  const employees = report.allEmployees
  const names = []

  Object.values(employees).forEach(val => names.push(...val));

  return names;
}
