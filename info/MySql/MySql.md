https://diarioprogramador.com/mysql-comandos-basicos-desde-terminal/

# MySQL

## Acceder a la consola de comandos de MySQL
    mysql -u root -p

## Mostrar todas las bases de datos del servidor
    show DATABASES;

## Crear una nueva base de datos
    CREATE DATABASE dbprueba1;

## Borrar una base de datos
    DROP DATABASE dbprueba1;

## Crear tabla nueva en base de datos
Antes de crear una tabla nueva en la base de datos es necesario declarar en que base de datos vas a estar trabajando, para ello se utiliza la instrucción USE:
    USE dbprueba1;

Para mostrar las tablas de dicha base de datos se utiliza una instrucción que ya has usado anteriormente SHOW:
    SHOW TABLES;

Ahora vas a crear una nueva tabla con sus respectivas columnas y propiedades:
    CREATE TABLE Libros (id_libro int unsigned not null auto_increment comment 'Llave primaria', Nombre varchar (50) not null, Autor varchar (50) not null, Editorial varchar (50) not null, primary key (id_libro));

Vuelve a ver las tablas de la base de datos:
    SHOW TABLES;

## Para mostrar la información de una tabla en la consola escribe:
EXPLAIN Libros;



