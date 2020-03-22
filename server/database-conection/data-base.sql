CREATE DATABASE Books;

create table person (
    id_uid UUID PRIMARY KEY NOT NULL,
    person_name VARCHAR(50) NOT NULL,
    password VARCHAR(400) NOT NULL,
    refreshtoken VARCHAR(400),
    UNIQUE(person_name),
    UNIQUE(refreshtoken)
);
select * from pg_available_extentions;
create extension if not exists 'uuid-ossp';

insert into person (id_uid, person_name, password) values (uuid_generate_v4(), 'edd', 'test');

select * from person;