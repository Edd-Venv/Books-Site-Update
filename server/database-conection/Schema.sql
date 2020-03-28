CREATE DATABASE Books;


create table book (
  book_id SERIAL PRIMARY KEY,
  person_id UUID NOT NULL,
  book_image VARCHAR NOT NULL,
  book_key BIGINT NOT NULL,
  book_title VARCHAR NOT NULL,
  book_author VARCHAR NOT NULL,
  book_price NUMERIC NOT NULL,
  book_currencyCode VARCHAR NOT NULL,
  book_pages BIGINT NOT NULL,
  id_uid UUID REFERENCES person
)


create table book (
    book_id BIGSERIAL PRIMARY KEY,
    person_id UUID NOT NULL,
    book_image VARCHAR(300) NOT NULL,
    book_key BIGINT NOT NULL,
    book_title VARCHAR(60) NOT NULL,
    book_author VARCHAR(60) NOT NULL,
    book_price int NOT NULL,
    book_price_currency VARCHAR(5) NOT NULL,
    book_pages BIGINT NOT NULL
);
insert into book (person_id, book_info) values ('182a0617-85ce-4053-b736-368824db61f3', json_object( '{ "book_image",
  "https://images.randomhouse.com/cover/9780307237699",
  "book_key",
  9780307237699 }'
  ))
  insert into book (person_id, book_info) values ('182a0617-85ce-4053-b736-368824db61f3', to_json( '[hi, 6]'::json
  ))
insert into book (person_id, book_image, book_key, book_title, book_author, book_price, book_price_currency, book_pages) values ('0d0b845f-98bd-477b-8747-6ea99bff6509','https://images.randomhouse.com/cover/9780307275929',
  9780307275929,
  'No Name in the Street',
 'James Baldwin',
  17.95,
  'CAD',
  208)

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
