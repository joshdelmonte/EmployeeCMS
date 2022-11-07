INSERT INTO departments (names)
VALUES ("Sales"),
       ("Warehouse"),
       ("Accounting"),
       ("Human Resources"),
       ("Customer Service"),
       ("Management");

INSERT INTO roles (title, salary, department_id)
VALUES ("Manager", 95000, 1),
       ("Receptionist", 48000, 2),
       ("Salesperson", 53000, 3),
       ("Accountant", 60000, 4),
       ("Warehouse", 38000, 5),
       ("HR", 75000, 6);
       

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Michael", "Scott", 1),
       ("Dwight", "Schrute", 3),
       ("Darryl", "Philbin", 5),
       ("Angela", "Martin", 4),
       ("Jim", "Halpert", 3),
       ("Stanley", "Hudson", 3),
       ("Phyllis", "Vance", 3),
       ("Roy", "Anderson", 5),
       ("Oscar", "Nunez", 3),
       ("Kevin", "Malone", 4),
       ("Pam", "Beesly", 2),
       ("Toby", "Flenderson", 6);

-- UPDATE employee set manager_id = 1 where id = 5;
-- UPDATE employee set manager_id = 1 where id = 6;
-- UPDATE employee set manager_id = 1 where id = 7;
-- UPDATE employee set manager_id = 2 where id = 8;
-- UPDATE employee set manager_id = 3 where id = 9;
-- UPDATE employee set manager_id = 3 where id = 10;
-- UPDATE employee set manager_id = 4 where id = 11;
-- UPDATE employee set manager_id = 4 where id = 12;
-- UPDATE employee set manager_id = 4 where id = 1;
-- UPDATE employee set manager_id = 4 where id = 2;
-- UPDATE employee set manager_id = 4 where id = 3;