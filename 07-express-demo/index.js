import express from 'express';
import { v4 as uuid } from 'uuid';
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Home route');
});

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app
    .get('/test', (req, res) => {
      res.send('Test route')
    })
    .get('/test/:id', (req, res) => {
      console.log(req.params);
      res.send(uuid());
});

app.listen(PORT, () => {
  console.log(`Express Demo App listening on port: ${PORT}`);
});
