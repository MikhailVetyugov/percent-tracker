const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/', routes);

app.listen(PORT, function () {
    console.log(`The server is listening on ${PORT}!`);
});
