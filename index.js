import express, { json } from 'express';
const app = express();
import { config } from 'dotenv';
import morgan from 'morgan';

// Load .env
config();

// eslint-disable-next-line no-unused-vars
import colors from 'colors'

const PORT = process.env.APP_PORT || 5000;

app.use(json());

if(process.env.NODE_ENV == 'development') {
    app.use(morgan('dev'));
}

app.get('/', function (req, res) {
    res.send('Hello World!');
  });


app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`.cyan.bold)
});