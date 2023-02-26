
const express = require('express');
const debug = require('debug')('app:adminRouter');
const { MongoClient } = new require('mongodb');
const sessions = require('../data/sessions.json');



const adminRouter = express.Router();
adminRouter.route('/').get((req, res) => {
    const url = 'mongodb+srv://dbUser:m8bYPccxSv2rfP71@cluster0.n6wmrai.mongodb.net?retryWrites=true&w=majority';

    const dbName = 'globomantics';

    (async function mongo() {
        let client;

        try {
            client = await MongoClient.connect(url);
            debug('Connected to the mongo DB');
            console.log('Connected to the mongo DB');
            const db = client.db(dbName);

            //get the reference to the collection
            const collection = db.collection('sessions');

            //drop the collection
            await collection.drop();


            const response = await db.collection('sessions').insertMany(sessions);
            const insertedIds = response.insertedIds;

            // Query the collection using the inserted _id values
            const insertedDocs = await db.collection('sessions').find({ _id: { $in: Object.values(insertedIds) } }).toArray();
            //console.log(insertedDocs);
            res.json(insertedDocs);

        } catch (error) {
            console.log(error.stack);
            debug(error.stack);
        }
    }());

});


module.exports = adminRouter;