DROP DATABASE IF EXISTS famouspic;
CREATE DATABASE famouspic;
USE famouspic;

CREATE TABLE user(
    id INT(4) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    firstname varchar(255),
    lastname varchar(255),
    email varchar(100)  NOT NULL UNIQUE,
    password varchar(100),
    address varchar(200),
    tel int(8),
    role varchar(20) NOT NULL
    )
    ; 
INSERT INTO user (email,password,role) VALUES ("admin","$2a$10$dgYzs8plLOkR7lM0UHhQt.YfUVqvDWqH.5ovNp.IvRXT4DgX47jP2","admin");


