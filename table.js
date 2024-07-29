let employees = [
    {
        id: 1,
        name: "John",
        salary: 1000,
        dept: "cse",
        age: "23",
        gender: "male",
        image: "https://images.unsplash.com/photo-1521702813222-1943f3fb9c07?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGV2ZWxvcGVyJTIwcGVyc29ufGVufDB8fDB8fHww"
    },
    {
        id: 2,
        name: "Johnson",
        salary: 10000,
        dept: "cse",
        age: "29",
        gender: "male",
        image: "https://plus.unsplash.com/premium_photo-1661371243525-d02768a7feee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGV2ZWxvcGVyJTIwcGVyc29ufGVufDB8fDB8fHww"
    },
    {
        id: 3,
        name: "Joti",
        salary: 1000000,
        dept: "cse",
        age: "32",
        gender: "male",
        image: "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGh1bWFuc3xlbnwwfHwwfHx8MA%3D%3D"
    }
];

function displayEmployees(employeeList) {
    let tbody = document.getElementById("tbody");
    tbody.innerHTML = "";
    
    employeeList.map(({ id, name, salary, dept, image }, index) => {
        tbody.innerHTML += `
        <tr>
            <td>${index+  1}</td>
            <td>${name}</td>
            <td>${dept}</td>
            <td>${salary}</td>
            <td><img src="${image}" alt="${name}"></td>
            <td><button class="action-btn" onclick="deleteEmployee(${id})">Delete</button></td>
        </tr>
        
        
       
        `; });
    let totalSalary = employeeList.reduce((acc, {salary}) => acc + salary, 0);
        tbody.innerHTML += `<tr><td colspan="3">Total Salary:</td><td colspan=1>${totalSalary}</td></tr>`;
   
}



function submitSearch() {
    let tbody = document.getElementById("tbody");

    let searchtext = document.getElementById("searchbar").value.toLowerCase().trim();
    let filtered_employee = employees.filter(({ name }) => {
        return name.toLowerCase().includes(searchtext);
    });

    if (filtered_employee.length > 0) {
        displayEmployees(filtered_employee);
        let totalSalary = filtered_employee.reduce((acc, {salary}) => acc + salary, 0);
        tbody.innerHTML += `<tr><td colspan="5">Total Salary:</td><td>${totalSalary}</td></tr>`;
    } else {
        alert("No matching employee found");
        displayEmployees(employees);
        let totalSalary = employees.reduce((acc, {salary}) => acc + salary, 0);
        tbody.innerHTML += `<tr><td colspan="5">Total Salary:</td><td>${totalSalary}</td></tr>`;
    }
}

document.getElementById('employeeForm').addEventListener('submit', function (e) {
    e.preventDefault();
    let name = document.getElementById('name').value.trim();
    let dept = document.getElementById('dept').value.trim();
    let salary = parseFloat(document.getElementById('salary').value.trim());
    let image = document.getElementById('image').value.trim();

    if (name && dept && salary && image) {
        let newEmployee = {
            id: employees.length ? employees[employees.length - 1].id + 1 : 1,
            name,
            dept,
            salary,
            image
        };
        employees.push(newEmployee);
        displayEmployees(employees);
        document.getElementById('employeeForm').reset();
    } else {
        alert("Please fill out all fields correctly.");
    }
});

function deleteEmployee(id) {
    employees = employees.filter(employee => employee.id !== id);
    displayEmployees(employees);
}

// Initial display
displayEmployees(employees);
