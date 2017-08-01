CREATE DATABASE burgerSql_db;

USE burgers_db;

CREATE TABLE burger

(

	id int NOT NULL AUTO_INCREMENT,

	burger_name varchar(255) NOT NULL,

	devoured boolean NOT NULL,

	date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

	PRIMARY KEY (id)

);
INSERT INTO burger (burger_name, devoured) 

VALUES ('Burger', true),

	   ('Noodles', false),

	   ('Pizza', false);