//Not ES6 module
//commonJS
const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');

//instance of express and execute
const app = express();

//app.use(morgan('combined'));      //logs maximum info..
app.use(morgan('tiny'));            //logs minimum info..


app.get('/', (req, res) => {
    res.send('Building Application With NodeJs and Express...');
});

app.listen(3000, () => {
    //console.log(`listening on port ${chalk.green('3000')}`);
    debug(`listening on port ${chalk.green('3000')}`);
});





