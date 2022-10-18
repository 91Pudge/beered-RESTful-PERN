-- CREATE DATABASE beer;
CREATE TABLE users(
    user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_name VARCHAR(255)  NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL,
);

CREATE TABLE drinks(
    review_id SERIAL PRIMARY KEY,
    beer_name VARCHAR(255),
    brewery_name VARCHAR(255),
    style VARCHAR(255),
    descriptions VARCHAR(255),
);
