CREATE DATABASE ProjetoIndividual;

USE ProjetoIndividual;

CREATE TABLE usuario (
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45) NOT NULL,
sobrenome VARCHAR(45) NOT NULL,
email VARCHAR(45) NOT NULL UNIQUE,
senha VARCHAR(45) NOT NULL
);

CREATE TABLE quiz (
id INT PRIMARY KEY AUTO_INCREMENT,
titulo VARCHAR(45),
fkUsuario INT,
FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
);

CREATE TABLE dashboard (
id INT,
fkQuiz INT,
FOREIGN KEY (fkQuiz) REFERENCES quiz(id),
PRIMARY KEY (id, fkQuiz),
titulo VARCHAR(45) NOT NULL
);

drop table usuario;
drop table quiz;
drop table dashboard;
drop database  ProjetoIndividual;

select * from usuario; 
desc usuario;
truncate usuario;
show tables;