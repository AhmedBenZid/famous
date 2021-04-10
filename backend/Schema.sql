DROP DATABASE IF EXISTS famouspic;
CREATE DATABASE famouspic;
USE famouspic;

/* Creation du table User */
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
/*Create default admin in user*/
INSERT INTO user (email,password,role) VALUES ("admin","$2a$10$dgYzs8plLOkR7lM0UHhQt.YfUVqvDWqH.5ovNp.IvRXT4DgX47jP2","admin");

/* Creation du table Pack */
CREATE TABLE packs (
    id INT(4) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    label varchar(255),
    description varchar(255),
    price float(8),
    materials varchar(255),
    imgUrl varchar(255)
);

/* Creation du table Reservations */
CREATE TABLE reservations(
        id INT(4) NOT NULL PRIMARY KEY AUTO_INCREMENT,
        dateReservation DATE,
        status varchar(255),
        clientId INT(4),
        packId INT(4)
);
