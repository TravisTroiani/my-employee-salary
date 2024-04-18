// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  const employeeArray = []; // Initialize an empty array to store employee objects

  // Get user input for employee data
  const firstName = prompt("Enter employee's first name:");
  const lastName = prompt("Enter employee's last name:");
  const salary = parseFloat(prompt("Enter employee's salary:"));

  // Create an employee object and push it to the array
  const employee = {
    firstName: firstName,
    lastName: lastName,
    salary: salary
  };
  employeeArray.push(employee);

  return employeeArray; // Return the array of employee objects
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  let totalSalary = 0;

  // Calculate total salary
  for (let i = 0; i < employeesArray.length; i++) {
    totalSalary += employeesArray[i].salary;
  }

  // Calculate average salary
  const averageSalary = totalSalary / employeesArray.length;

  // Display average salary
  alert(`Average Salary: ${averageSalary.toLocaleString("en-US", { style: "currency", currency: "USD" })}`);
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomIndex];

  // Display random employee details
  alert(`Random Employee:\nName: ${randomEmployee.firstName} ${randomEmployee.lastName}\nSalary: ${randomEmployee.salary.toLocaleString("en-US", { style: "currency", currency: "USD" })}`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

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

// Event listener for adding employees
addEmployeesBtn.addEventListener('click', function() {
  const newEmployees = collectEmployees();
  displayEmployees(newEmployees);
  displayAverageSalary(newEmployees);
  getRandomEmployee(newEmployees);
});