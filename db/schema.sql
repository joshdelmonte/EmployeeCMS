DROP DATABASE IF EXISTS emploixMGMT_db;
CREATE DATABASE emploixMGMT_db;

USE emploixMGMT_db;

CREATE TABLE departments(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(30) NOT NULL
);
CREATE TABLE roles(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT,
    FOREIGN KEY(department_id) REFERENCES departments(id)
    ON DELETE SET NULL

);
CREATE TABLE employees(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    manager_id INT,
    FOREIGN KEY(role_id) REFERENCES roles(id)
    ON DELETE SET NULL,
     FOREIGN KEY(manager_id) REFERENCES employees(id)
     ON DELETE SET NULL
);