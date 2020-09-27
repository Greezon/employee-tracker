use tracker;
insert into department(name) values
("production"),
("marketing"),
("distribution"),
("purchasing"),
("receiving");

select * from department;
insert into title(title, salary, department_id) values
("manager", 1, 1), 
("engineer", 22, 2),
("laborer", 333, 3),
("ceo", 4444, 4),
("coo", 55555, 5),
("wing-man", 1, 1), 
("actor", 222, 2),
("gunman", 333, 3),
("share-holder", 4444, 4),
("criminal", 55555, 5);

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







