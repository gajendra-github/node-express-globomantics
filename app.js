//Not ES6 module
//commonJS
const express = require('express');
//instance of express and execute
const app = express();

app.get('/', (req, res) => {
    res.send('Building Application With NodeJs and Express...');
})

app.listen(3000, () => {
    console.log('Listening on port 3000');
})

