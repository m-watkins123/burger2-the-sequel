CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers

(

	id int NOT NULL AUTO_INCREMENT,

	burger_name varchar(255) NOT NULL,

	devoured BOOLEAN DEFAULT false,

  	ts TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

  	dt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

  	PRIMARY KEY(id)

);
INSERT INTO burgers (burger_name, devoured) VALUES ('Plain Burger', true);

INSERT INTO burgers (burger_name, devoured) VALUES ('Double burgers', false);

INSERT INTO burgers (burger_name, devoured) VALUES ('Maze Burger', true);

INSERT INTO burgers (burger_name, devoured) VALUES ('Dark Burger', false);

INSERT INTO burgers (burger_name, devoured) VALUES ('Forget Burger', true);

INSERT INTO burgers (burger_name, devoured) VALUES ('Velvet Burger ', true);