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
