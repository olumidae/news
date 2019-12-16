import { Pool } from 'pg';
import dotenv from 'dotenv';
import debug from 'debug';
import Config from './config';

dotenv.config();
/**
 * @fileoverview shows the db connection credentiails
 * @requires dotenv
 * @requires debug
 * @requires Pool
 */
const connectTo = Config.getDbCredentials();
debug('app/debug')(connectTo);

const pool = new Pool({ connectionString: process.env.DATABASE_URL });


export default pool;

// query(text, params) {
//     return new Promise((resolve, reject) => {
//       pool.query(text, params).then((res) => {
//         resolve(res);
//       })
//         .catch((err) => {
//           reject(err);
//         });
//     });
//   },