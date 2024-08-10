export default function createEmployeesObject(departmentName, employees) {
  const ar = [];
  for (const i of employees){
    ar.push(i);
  }
  const dep = {
    departmentName: ar,
  }

  return dep;
}
