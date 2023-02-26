//Not ES6 module
//commonJS
const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');

//no need to install path, comes out of the box as part of nodejs
const path = require('path');
//const sessions = require('./src/data/metro-inventory.json');





const PORT = process.env.PORT || 3000;


//instance of express and execute
const app = express();

//const sessionRouter = express.Router();
const sessionsRouter = require('./src/routers/sessionsRouter');
const adminRouter = require('./src/routers/adminRouter');


//app.use(morgan('combined'));      //logs maximum info..
app.use(morgan('tiny'));            //logs minimum info..

//express.static helper function sets up a middleware to handle static files
//locate static files in the file system with path.join()
//__dirname ~ variable name comes bundled into node ~ 
//app.use(express.static(path.join(__dirname, '/public/')));

app.use(express.static(path.join(__dirname, '/public/')));

//console.log(`Folder location: ${__dirname}`);

app.set('views', './src/views');
app.set('view engine', 'ejs');


// sessionRouter.route('/').get((req, res) => {
//     res.send('Hello sessions');
// });

// sessionRouter.route('/').get((req, res) => {
//     //res.send('Hello single session');
//     res.render('sessions', {
//         sessions: [
//             { title: 'Session 1', description: 'this is session 1' },
//             { title: 'Session 2', description: 'this is session 2' }
//         ]
//     })
// })



app.use('/sessions', sessionsRouter);
app.use('/admin', adminRouter);


app.get('/', (req, res) => {
    //res.send('Building Application With NodeJs and Express...');
    res.render('index', { title: 'Welcome to Globomantics', data: ['a', 'b', 'c'] });
});

app.listen(PORT, () => {
    //console.log(`listening on port ${chalk.green('3000')}`);
    debug(`listening to port ${chalk.green(PORT)}`);
});





