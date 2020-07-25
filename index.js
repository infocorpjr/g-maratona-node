import express, {json} from 'express';

const app = express();
import {config} from 'dotenv';
import morgan from 'morgan';
import exampleRoutes from 'src/routes/example.route';

// Load .env
config();

// eslint-disable-next-line no-unused-vars
import colors from 'colors';

const PORT = process.env.APP_PORT || 5000;

app.use(json());

app.use(morgan('tiny'));

app.get('/', function (req, res) {
	res.send('Hello World!');
});

app.use('/api/v1/example', exampleRoutes);

app.listen(PORT, () => {
	console.log(`Server is running at port ${PORT}`.cyan.bold);
});