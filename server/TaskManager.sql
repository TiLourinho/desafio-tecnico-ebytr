DROP DATABASE IF EXISTS TaskManager;

CREATE DATABASE TaskManager;

USE TaskManager;

CREATE TABLE tasks (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(150) NOT NULL,
    type VARCHAR(15) NOT NULL DEFAULT 'Pendente',
    register_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE = InnoDB;