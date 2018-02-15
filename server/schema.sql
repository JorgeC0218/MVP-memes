DROP DATABASE IF EXISTS exampleData;

CREATE DATABASE exampleData;

USE exampleData;

CREATE TABLE allDaMemes (
  id int NOT NUll auto_increment,
  name varchar(50) not null,
  url varchar(666) not null,
  primary key (id)
);
INSERT INTO allDaMemes (name, url) VALUES ('jack', "sir.jpeg");
