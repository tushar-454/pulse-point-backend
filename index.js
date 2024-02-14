const mongoose = require('mongoose');
const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 4000;
const cookieParser = require('cookie-parser');
const cors = require('cors');
const globalError = require('./Error/globalError');

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
    methods: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH', 'OPTIONS'],
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(globalError);

app.get('/', (_req, res) => {
  res.send('Pulse-point backend is running!');
});
app.get('/health', (_req, res) => {
  res.send('Pulse-point api health Ok.');
});

mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log(
      'Pinged your deployment. You successfully connected to MongoDB!'
    );
    app.listen(port, () => {
      console.log(`Server is running on  http://localhost:${port}`);
    });
  })
  .catch((e) => {
    console.log(e);
  });
