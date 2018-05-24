-- Drops the animals_db if it exists currently --
DROP DATABASE IF EXISTS burgers_db;
-- Create the database task_saver_db and specified it for use.
CREATE DATABASE burgers_db;
USE burgers_db;

-- Create the table burgers.
CREATE TABLE burgers
(
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(255) NOT NULL,
devoured BOOLEAN DEFAULT false,
PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name, devoured)
VALUES ("Pickles", true);
INSERT INTO burgers (burger_name, devoured)
VALUES ("Cheesy Burger", false);
INSERT INTO burgers (burger_name, devoured)
VALUES ("Big Boy", true);
INSERT INTO burgers (burger_name, devoured)
VALUES ("Junior", false);