const express = require('express');
const router = require('./router');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Credentials', true);
  next();
});
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000'
}));
app.use(cookieParser());
app.use(router);

module.exports = app;
