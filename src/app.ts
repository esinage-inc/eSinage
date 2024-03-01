import express, { Application } from 'express';

const app: Application = express();

app.use('/', (req, res) => {
  res.send('hi');
});

app.listen(5000, () => {
  console.log('listening on port 5000');
});
