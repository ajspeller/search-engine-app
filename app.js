require('dotenv').config();
require('./database/db.js');

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log('server listening on ...', PORT);
});
