CREATE DATABASE IF NOT EXISTS proyecto;

use proyecto;

CREATE TABLE IF NOT EXISTS habitantes (
id_habitante  int auto_increment primary key,
nombre varchar(50) not null 
);

CREATE TABLE IF NOT EXISTS poblacion(
id_poblacion int auto_increment primary key,
numero int not null
);

CREATE TABLE IF NOT EXISTS casas (
id_casas int auto_increment primary key,
casas int not null
);
