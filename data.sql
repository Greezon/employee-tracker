use tracker;
insert into department(name) values("production"), ("marketing"), ("distribution"),("purchasing"), ("receiving");
select * from department;
insert into title(title, salary, department_id) values
("manager", 500000, 1), 
("manager", 500000, 2),
("manager", 500000, 3),
("manager", 500000, 4),
("manager", 500000, 5),
("team-lead", 500000, 1), 
("team-lead", 500000, 2),
("team-lead", 500000, 3),
("team-lead", 500000, 4),
("team-lead", 500000, 5);
select * from title;

insert into employee(first_name, last_name, role_id, manager_id) values
("John", "smith", 1, null),
("Keanue", "reeves", 2, null),
("scarlet", "johanson", 3, null),
("teto", "francheese", 4, null),
("paul", "gilbert", 5, null),
("ian", "astesana", 6, 1),
("pure", "coconut", 7,2),
("rain", "fire", 8, 3),
("current", "status", 9, 4),
("brittany", "spearse", 10,5);

select * from employee;







