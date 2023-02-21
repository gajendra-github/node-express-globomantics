//Not ES6 module
//commonJS
const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');

//no need to install path, comes out of the box as part of nodejs
const path = require('path');

//instance of express and execute
const app = express();

//app.use(morgan('combined'));      //logs maximum info..
app.use(morgan('tiny'));            //logs minimum info..

//express.static helper function sets up a middleware to handle static files
//locate static files in the file system with path.join()
//__dirname ~ variable name comes bundled into node ~ 
app.use(express.static(path.join(__dirname, '/public/')));

app.get('/', (req, res) => {
    res.send('Building Application With NodeJs and Express...');
});

app.listen(3000, () => {
    //console.log(`listening on port ${chalk.green('3000')}`);
    debug(`listening to port ${chalk.green('3000')}`);
});





