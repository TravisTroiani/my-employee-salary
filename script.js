// Function to collect employee data
const collectEmployees = function() {
  const employeeArray = [];

  let addEmployee = true;
  while (addEmployee) {
    const firstName = prompt("Enter employee's first name:");
    const lastName = prompt("Enter employee's last name:");
    const salaryInput = prompt("Enter employee's salary:");
    const salary = parseFloat(salaryInput);

    if (isNaN(salary)) {
      alert("Salary must be a number. Defaulting to $0.00");
    }

    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: isNaN(salary) ? 0 : salary
    };
    employeeArray.push(employee);

    const continueAdding = confirm("Do you want to add another employee?");
    addEmployee = continueAdding;
  }

  return employeeArray;
}

// Function to display average salary
const displayAverageSalary = function(employeesArray) {
  let totalSalary = 0;
  for (let i = 0; i < employeesArray.length; i++) {
    totalSalary += employeesArray[i].salary;
  }
  const averageSalary = totalSalary / employeesArray.length;
  console.log(`Average Salary: $${averageSalary.toFixed(2)}`);
  console.log(`Number of Employees: ${employeesArray.length}`);
}

// Function to get a random employee
const getRandomEmployee = function(employeesArray) {
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomIndex];
  console.log(`Congratulations ${randomEmployee.firstName} ${randomEmployee.lastName} is our our random lottery winner!!`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

addEmployeesBtn.addEventListener('click', function() {
  const newEmployees = collectEmployees();
  displayEmployees(newEmployees);
  displayAverageSalary(newEmployees);
  getRandomEmployee(newEmployees);
});