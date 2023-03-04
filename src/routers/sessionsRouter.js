const express = require('express');
const debug = require('debug')('app:sessionRouter');
const { MongoClient, ObjectId } = require('mongodb');
const sessionsRouter = express.Router();




sessionsRouter.route('/').get((req, res) => {


    //const url = 'mongodb+srv://dbUser:m8bYPccxSv2rfP71@cluster0.n6wmrai.mongodb.net?retryWrites=true&w=majority';
    const uri = process.env.MONGO_URI;

    const dbName = 'globomantics';

    (async function mongodb() {

        let client;

        try {
            client = await MongoClient.connect(uri, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });

            res.send('Hello');
        } catch (error) {
            console.log(error.stack);
        }
    }());
    //res.send('Hi'); 
});



module.exports = sessionsRouter;


