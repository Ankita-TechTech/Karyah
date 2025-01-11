CREATE DATABASE karyah_db;
SHOW DATABASES;
USE karyah_db;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    mobile VARCHAR(15) NOT NULL,
    email VARCHAR(255) NOT NULL
);

show tables;

INSERT INTO users (name, mobile, email) 
VALUES ('Ankita Satdeve', '1234567890', 'ankita@gmail.com');

SELECT * FROM users;

