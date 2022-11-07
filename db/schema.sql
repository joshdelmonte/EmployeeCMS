CREATE DATABASE emploixMGMT_db;

USE emploixMGMT_db;

CREATE TABLE department(
    id INT PRIMARY KEY AUTO-INCREMENT NOT NULL,
    name VARCHAR(30) NOT NULL
);
CREATE TABLE roles(
    id INT PRIMARY KEY AUTO-INCREMENT NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL,
    FOREIGN KEY(department_id) REFERENCES department(id),
    ON DELETE SET NULL

);
CREATE TABLE employees(
    id INT PRIMARY KEY AUTO-INCREMENT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT,
    FOREIGN KEY(role_id) REFERENCES roles(id),
    ON DELETE SET NULL,
     FOREIGN KEY(manager_id) REFERENCES employees(id),
     ON DELETE SET NULL
);