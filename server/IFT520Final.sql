/* create database IFT520Final */

create table Person (
PID int,
Fname varchar(100),
Lname varchar(100),
Age int,
Primary key (PID)
);

create table Workout (
WID varchar(100),
PID int,
Kickboxing varchar(100),
Boxing varchar(100),
Warmup varchar(100),
Primary key (WID),
Foreign key (PID) REFERENCES Person(PID)
on delete set null
on update cascade
);

create table Diet (
FID varchar(100),
PID int,
Veg varchar(100),
HighCalorie varchar(100),
LowCalorie varchar(100),
HighProtein varchar(100),
Primary key (FID),
Foreign key (PID) REFERENCES Person(PID)
on delete set null
on update cascade
);

create table Login (
LID varchar(100),
PID int,
Uname varchar(100),
PW varchar(100),
Primary key (LID),
Foreign key (PID) REFERENCES Person(PID)
on delete set null
on update cascade
);

select * FROM person;
select * FROM workout;
select * from diet;
select * from login;