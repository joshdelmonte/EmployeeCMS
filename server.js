const inquirer = require(`inquirer`)
const mysql = require(`mysql2`)
// const db = mysql.createConnection(`mysql://root:15@Chillea@localhost:3306/emploixMGMT_db`)
const db = mysql.createConnection({
    host: `localhost`,
    user: `root`,
    password: `15@Chillea`,
    database: `emploixMGMT_db`
})

// add employee, department, & role

// view employee, department, & role

// Update employee role.

//  Update employee managers.

//  View employees by manager.

//  View employees by department.

//  Delete departments, roles, and employees.

//  View the total utilized budget of a department (in other words, the combined salaries of all employees in that department).
const pergunta = () => {
    inquirer.prompt([{
        type: `list`,
        name: `avud`,
        message: `Welcome. What seems to be the matter at hand?`,
        choices: [`ADD employee`, `ADD role`, `ADD department`, `VIEW employee`, `VIEW role`, `VIEW department`,
            `VIEW employee by manager`, `VIEW employee by department`, `VIEW combined employees salary by department`,
            `UPDATE employee's manager`, `UPDATE emplyee role`, `DELETE employee`, `DELETE role`, `DELETE department`, `EXIT`]
    }])
        .then(avud => {
            console.log(avud)
            console.log(avud.avud)
            switch (avud.avud) {

                case `ADD employee`:
                    addEmployee()
                    break

                case `ADD role`:
                    addRole()
                    break

                case `ADD department`:
                    addDepartment()
                    break

                case `VIEW employee`:
                    viewEmployee()
                    break

                case `VIEW role`:
                    viewRole()
                    break

                case `VIEW department`:
                    viewDepartment()
                    break

                // case `VIEW employee by manager`:
                // viewEmpByMan()
                // break

                // case `VIEW combined employees salary by department`:
                // viewEmpSalDep()
                // break

                // case `UPDATE employee's manager`:
                //     upEmpMan()
                //     break

                case `UPDATE employee role`:
                    upEmpRole()
                    break

                case `DELETE employee`:
                    delEmp()
                    break

                case `DELETE role`:
                    delRole()
                    break

                case `DELETE department`:
                    delDep()
                    break

                case `EXIT`:
                    console.log(`Thank you for using our CMS. Please take care!`)

            }
        })
}
//questions to ascertain employee
const addEmployee = () => {
    console.log(`Alright! Let's add an employee!`)
    inquirer.prompt([{
        message: `What is the first name of the person you would like to add to our team?`,
        type: `input`,
        name: `first_name`
    },
    {
        message: `What is the last name of the person you would like to add to the team?`,
        type: `input`,
        name: `last_name`
    },
    {
        message: `What is the role of this person?`,
        type: `input`,
        name: `role_id`,
        // choices: [`Manager`, `Receptionist`, `Salesperson`, `Accountant`, `Warehouse`, `HR`]
    },
    {
        message: `Are they a manager?`,
        type: `list`,
        name: `manager_verified`,
        choices: [`Yes`, `No`]
    }
    ])
        .then(employee => {
            if (employee.manager_verified === `Yes`) {
                console.log(`--ADDING MANAGER--`)
                delete employee.manager_verified

                console.log(employee)

                db.query(`INSERT INTO employees SET ?`, employee, err => {
                    if (err) { console.log(err) }
                })
                console.log(`--UNDERLING ADDED--`)
                pergunta()
            } else if (employee.manager_verified === `No`) {

                inquirer.prompt([{
                    type: `input`,
                    name: `manager_id`,
                    message: `What is the employees manager ID?`
                }])
                    .then(underling => {
                        console.log(employee)
                        console.log(underling)

                        delete employee.manager_verified

                        let novaEmploy = {
                            ...employee,
                            ...underling
                        }
                        db.query(`INSERT INTO employees SET ?`, novaEmploy, err => {
                            if (err) { console.log(err) }
                        })
                        console.log(`--ADDED EMPLOYEE--`)
                        pergunta()
                    })
            }
        })
}
//questions to ascertain role
const addRole = () => {
    console.log(`Brilliant! Let's add a role!`)
    inquirer.prompt([{
        message: `What role are we adding?`,
        type: `input`,
        name: `title`
    },
    {
        message: `What salary are we allotting this role?`,
        type: `input`,
        name: `salary`
    },
    {
        message: `What is your departments ID as per the role?`,
        type: `input`,
        name: `department_id`
    }
    ])
        .then(role => {
            console.log(role)
            db.query(`INSERT INTO roles SET ?`, role, err => {
                if (err) { console.log(err) }
            })
            console.log(`--ADDED ROLE--`)
            pergunta()
        })
}
//questions to ascertain department
const addDepartment = () => {
    console.log(`Cool! Let's add a department!`)
    inquirer.prompt([{
        message: `What department are we adding?`,
        type: `input`,
        name: `name`
    }])
        .then(department => {
            console.log(department)
            db.query(`INSERT INTO departments SET ?`, department, err => {
                if (err) { console.log(err) }
            })
            console.log(`--ADDED DEPARTMENT--`)
            pergunta()
        })
}
//update employee role
const upEmpRole = () => {
    inquirer.prompt([{
        name: `id`,
        type: `input`,
        message: `What's the ID of the employee you're changing?`
    },
    {
        name: `role_id`,
        type: `input`,
        message: `What's the ID of the role we're updating to?`
    }])

        .then(employee => {

            let novaRolo = {
                role_id: employee.role.id
            }
            db.query(`UPDATE employees SET ? WHERE id = ${employee.id} `, novaRolo, err => {
                if (err) { console.log(err) }
            })
            console.log(`--UPDATED EMPLOYEE--`)
            pergunta()
        })
}
//View entire employees
const viewEmployee = () => {
    db.query(`SELECT * FROM employees`, (err, employees) => {
        if (err) {
            console.log(err)
        }
        console.table(employees)
        pergunta()
    })
}
//View the dapartment entirely
const viewDepartment = () => {
    db.query(`SELECT * FROM departments`, ( err, departments) => {
        if (err) {
            console.log(err)
        }
        console.table(departments)
        pergunta()
    })
}
//View roles entirely   
const viewRole = () => {
    db.query(`SELECT * FROM roles`, (err, roles) => {
        if (err) {
            console.log(err)
        }
        console.table(roles)
        pergunta()
    })
}

pergunta()

const delEmp = () => {
    db.query
}