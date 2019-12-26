import pool from '../../config/db';

const createTable = `DROP TABLE IF EXISTS users CASCADE;
    CREATE TABLE users (
    id SERIAL PRIMARY KEY NOT NULL,
    fullName VARCHAR (128) UNIQUE NOT NULL,
    email VARCHAR(128) UNIQUE NOT NULL,
    password VARCHAR(128) NOT NULL,
    bio VARCHAR(300) NOT NULL,
    isAdmin BOOLEAN NOT NULL DEFAULT false,
    isLoggedIn BOOLEAN NOT NULL DEFAULT false,
    createdOn TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
DROP TABLE IF EXISTS articles CASCADE;
    CREATE TABLE articles (
        id SERIAL PRIMARY KEY NOT NULL,
        title VARCHAR(128) NOT NULL,
        article VARCHAR NOT NULL,
        createdBy VARCHAR (128) NOT NULL REFERENCES users (email),
        createdOn TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updatedOn TIMESTAMP
    );`;

pool.query(createTable).then(() => pool.end()).catch((err) => console.log(err));
