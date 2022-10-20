CREATE DATABASE beer;

CREATE TABLE users(
    user_id UUID DEFAULT uuid_generate_v4(),
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL UNIQUE,
    user_password VARCHAR(255) NOT NULL,
    PRIMARY KEY (user_id)
  );

CREATE TABLE drinks(
    review_id SERIAL,
    user_id UUID,
    beer_name VARCHAR(255) NOT NULL,
    brewery_name VARCHAR(255),
    style VARCHAR(255),
    descriptions VARCHAR(255),
    PRIMARY KEY (review_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
  );


insert into users(user_name, user_email, user_password) values ('j','j@example.com','qwerty');

insert into drinks(user_id, beer_name, brewery_name, style, descriptions) values ('f68d935f-1028-46f5-bdbe-5d3c9bc56052','to the moon', 'to the moon', 'IPA', 'tasty');