const express = require('express');
const routes = require('./routes/routes');
const bodyParser = require('body-parser');
const path = require('path')
const cors = require('cors')

const pg = require('./infra/databases/postgres');

const app = express();

const port = 3001;

app.use(cors());
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname + '/views'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(routes);

app.listen(port, (err) => {
    if (err)
        console.log('Server not created');
    else
        console.log('Server created');

});