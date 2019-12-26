import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './routes/routes';
/**
 * @fileoverview - application entry point
 * @requires - express
 * @requires - body-parser
 * @requires - dotenv
 * @requires - cors
 * @requires - ./routes
 * @exports - app.js
*/

const app = express();

// declare bodyParser as middleware which handles post requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 3rd party middleware
app.use(cors('*'));

app.get('/', (req, res) => {
  res.send({
    message: 'Hello Welcome to NEWS API',
  });
});

console.log('app environment: ', app.get('env'));
app.use('/api/v1', router);
app.use('/', (req, res) => res.status(200).json({ message: 'Welcome' }));

export default app;
