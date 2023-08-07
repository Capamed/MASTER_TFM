CREATE DATABASE IF NOT EXISTS master_db;

USE master_db;

CREATE TABLE user(
    identification_number INT(13) NOT NULL,
    first_name VARCHAR(100) DEFAULT NULL,
    second_name VARCHAR(100) DEFAULT NULL,
    last_name VARCHAR(100) DEFAULT NULL,
    second_lastname VARCHAR(100) DEFAULT NULL,
    date_birth DATE DEFAULT NULL,
    email VARCHAR(100) DEFAULT NULL,
    phone VARCHAR(20) DEFAULT NULL,
    cellphone VARCHAR(20) DEFAULT NULL,
    gender VARCHAR(1) DEFAULT NULL,
    username VARCHAR(100) DEFAULT NULL,
    password VARCHAR(100) DEFAULT NULL,
    PRIMARY KEY (identification_number)
);