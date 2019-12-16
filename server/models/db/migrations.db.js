import pool from '../../config/db';

const createTable = `DROP TABLE IF EXISTS users CASCADE;
    CREATE TABLE users (
    id SERIAL PRIMARY KEY NOT NULL,
    firstName VARCHAR(50) NOT NULL,
    lastName VARCHAR(50) NOT NULL,
    email VARCHAR(128) UNIQUE NOT NULL,
    password VARCHAR(128) NOT NULL,
    bio VARCHAR(300) NOT NULL,
    isAdmin BOOLEAN NOT NULL DEFAULT false,
    isLoggedIn BOOLEAN NOT NULL DEFAULT false,
    createdOn TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
DROP TABLE IF EXISTS Articles CASCADE;
    CREATE TABLE articles (
        id SERIAL PRIMARY KEY NOT NULL,
        title VARCHAR(128) NOT NULL,
        article VARCHAR NOT NULL,
        createdBy SERIAL NOT NULL REFERENCES Users (id),
        createdOn TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updatedOn TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );`;

pool.query(createTable).then(() => pool.end()).catch((err) => console.log(err));
