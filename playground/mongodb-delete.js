const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
    if(error){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    var db = client.db('TodoApp');

    //deleteMany
    // db.collection('Todos').deleteMany({
    //    text: 'Eat lunch' 
    // }).then((result) => {
    //     console.log(result);
    // });
    //deleteOne
    // db.collection('Todos').deleteOne({
    //     text: 'Eat lunch'
    // }).then((result) => {
    //     console.log(result);
    // });
    // //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({
    //     completed: false
    // }).then((result) => {
    //     console.log(result);
        
    // })

    // db.collection('Users').deleteMany({
    //     name: 'mupa'
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').deleteOne({
        _id: new ObjectID('5b97b5fa0a029a5a5f87c42e')
    }).then((result) => {
        console.log(result);
        
    });



    client.close();
});