const express = require('express');
const debug = require('debug')('app:sessionRouter');
const { MongoClient, ObjectId } = require('mongodb');


//const sessions = require('../data/metro-inventory.json');
//const sessions = require('../data/sessions.json');
const sessionsRouter = express.Router();




sessionsRouter.route('/').get((req, res) => {
    const url = 'mongodb+srv://dbUser:m8bYPccxSv2rfP71@cluster0.n6wmrai.mongodb.net?retryWrites=true&w=majority';
    const dbName = 'globomantics';

    (async function mongodb() {

        let client;

        try {
            client = await MongoClient.connect(url);
            res.send('Hello');
        } catch (error) {
            console.log(error.stack);
        }
    }());
    //res.send('Hi');
});


// sessionsRouter.route('/').get((req, res) => {
//     const url = 'mongodb+srv://dbUser:m8bYPccxSv2rfP71@cluster0.n6wmrai.mongodb.net?retryWrites=true&w=majority';

//     const dbName = 'globomantics';
//     console.log('1');
//     (async function mongo() {
//         let client;

//         try {
//             client = await MongoClient.connect(url);
//             debug('Connected to the mongo DB');
//             console.log('Connected to the mongo DB');
//             const db = client.db(dbName);

//             const sessions = await db.collection('sessions').find().toArray();
//             res.render('sessions', { sessions });

//         } catch (error) {
//             console.log(error.stack);
//             debug(error.stack);
//         }
//     }());
// })

// sessionsRouter.route('/:id').get((req, res) => {
//     const id = req.params.id;

//     const url = 'mongodb+srv://dbUser:m8bYPccxSv2rfP71@cluster0.n6wmrai.mongodb.net?retryWrites=true&w=majority';

//     const dbName = 'globomantics';

//     (async function mongo() {
//         let client;

//         try {
//             client = await MongoClient.connect(url);
//             debug('Connected to the mongo DB');
//             // console.log('Connected to the mongo DB');
//             const db = client.db(dbName);

//             const session = await db.collection('sessions').findOne({ _id: new ObjectId(id) });

//             res.render('session', {
//                 session,
//             })
//         } catch (error) {
//             console.log(error.stack);
//             debug(error.stack);
//         }
//     }());





// });

module.exports = sessionsRouter;


