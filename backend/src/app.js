const express = require('express');
const router = require('./router');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(router);

module.exports = app;
