-- CREATE DATABASE beer;
CREATE TABLE drinks(
    review_id SERIAL PRIMARY KEY,
    beer_name VARCHAR(255),
    brewery_name VARCHAR(255),
    style VARCHAR(255),
    descriptions VARCHAR(255)
);



