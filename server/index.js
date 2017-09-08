const express = require('express');
const parser = require('body-parser');
const logger = require('morgan');
const path = require('path');
const routes = require('./requestRoutes');

const port = 3000;

const app = express();

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(logger('dev'));

app.use(express.static(path.join(__dirname, '../client/static')));

app.use('/api', routes);

app.listen(port, () => {
  console.log(`node listening on port ${port}`);
});
