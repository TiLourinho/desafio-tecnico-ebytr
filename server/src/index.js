const express = require('express');
require('dotenv').config();
const errorMiddleware = require('./middlewares/error');

const tasksRouter = require('./routes/tasksRouter');

const app = express();
app.use(express.json());

app.use('/tasks', tasksRouter);

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});