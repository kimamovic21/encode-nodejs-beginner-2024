import express from 'express';
import bodyParser from 'body-parser';
import 'dotenv/config';
import { sendEmail } from './controllers/email.controller.js';

const app = express();

const PORT = process.env.PORT;

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'));

app.post('/send-email', sendEmail);

app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`));
