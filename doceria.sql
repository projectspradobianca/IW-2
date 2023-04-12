create database candy;
use candy;

create table candy(
id int auto_increment not null,
cname varchar(60) null,
ctype varchar(30) null,
primary key(id)
);

insert into candy values
(1,'Galak','Chocolate'),
(2,'Maria-mole','doce caseiro'),
(3,'tablito','sorvete');

select * from candy;