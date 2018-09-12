const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
    if(error){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    var db = client.db('TodoApp');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5b97b7608098e0fd2eb4091f')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
        
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5b97b3b4789c3459603d5dbc')
    }, {
        $set: {
            name: 'mupa'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
        
    });
    



    client.close();
});