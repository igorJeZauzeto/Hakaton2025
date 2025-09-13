create database hakaton2025;
USE hakaton2025;
CREATE TABLE Account (
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);
CREATE TABLE Drug(
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    ATC VARCHAR(255),
    INN VARCHAR(255),
    maxPrice FLOAT,
    available TEXT,
    description TEXT
);
CREATE TABLE Treatment(
	idAcc INT,
    idDrug INT,
    description VARCHAR(255),
    FOREIGN KEY (idAcc) REFERENCES Account(id),
    FOREIGN KEY (idDrug) REFERENCES Drug(id),
    PRIMARY KEY (idAcc, IdDrug)
);