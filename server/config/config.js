import dotenv from 'dotenv';

dotenv.config();

/**
 * This is a config file that determines the database configuration to be used based on the environment
 * @requires - dotenv
 * @exports Config
 */

const {
  env, DB_NAME, DB_USER, DB_PASS, DB_HOST, DB_PORT, DATABSE_URL,
} = process.env;

class Config {
  static getDbCredentials() {
    const credentials = {
      development: {
        databaseURL: DATABSE_URL,
      },
      production: {
        name: DB_NAME,
        username: DB_USER,
        password: DB_PASS,
        host: DB_HOST,
        port: DB_PORT,
      },
      test: {
        name: DB_NAME,
        username: DB_USER,
        password: DB_PASS,
        host: DB_HOST,
        port: DB_PORT,
      },
    };
    return credentials[env];
  }
}

export default Config;
