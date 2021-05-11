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
    tel varchar(100)),
    role varchar(20) NOT NULL default ("user")
    )
    ;
/*Create default admin in user*/
INSERT INTO user (firstname, lastname,email,password,role) VALUES ("admin","admin","admin","$2a$10$dgYzs8plLOkR7lM0UHhQt.YfUVqvDWqH.5ovNp.IvRXT4DgX47jP2","admin");

/* Creation du table Pack */
CREATE TABLE packs (
    id INT(4) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    label varchar(255),
    description varchar(255),
    price float(8),
    materials varchar(255)
);

/* Creation du table Reservations */
CREATE TABLE reservations(
        id INT(4) NOT NULL PRIMARY KEY AUTO_INCREMENT,
        dateReservation DATE,
        dateCreation DATE default (current_date()),
        status varchar(255) default ("pending"),
        clientId INT(4),
        packId INT(4)
);

/* Creation du table Favoris */
CREATE TABLE favoris(
    id INT(4) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    clientId INT(4),
    packId INT(4)
)
