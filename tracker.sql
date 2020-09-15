create database tracker;
use tracker;

create table department (id int auto_increment primary key,
name varchar(30) not null);

create table title (id int auto_increment primary key,
title varchar(30),
salary decimal,
department_id int,
constraint departmentfk foreign key(department_id) references department(id)
);

create table employee (id int auto_increment primary key,
first_name varchar(30),
last_name varchar(30),
role_id int,
manager_id int,
constraint rolefk foreign key(role_id) references title (id)
);
