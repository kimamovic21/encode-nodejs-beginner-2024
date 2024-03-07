import express from 'express';
import bodyParser from 'body-parser';

import eventRoutes from './routes/event.routes.js'

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.get('/health', (req, res) => res.send('Hello World!'));

app.use('/events', eventRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
