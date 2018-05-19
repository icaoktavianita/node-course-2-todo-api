// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    
    //deleteMany
    // db.collection('Todos').deleteMany({
    //     text: 'Eat lunch'
    // }).then((result) => {
    //     console.log(result)
    // })

    //deleteOne
    // db.collection('Todos').deleteOne({
    //     text: 'Eat lunch'
    // }).then((result) => {
    //     console.log(result)
    // })

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({
    //     completed: false
    // }).then((result) => {
    //     console.log(result)
    // })

    // db.collection('Users').deleteMany({
    //     name: 'Annisa'
    // }).then((result) => {
    //     console.log(result)
    // })
    

    db.collection('Users').findOneAndDelete({
        _id : new ObjectID('5aff869c0b4da1108c01d48b'),
    }).then((result) => {
        console.log(result)
    })

    //db.close();
});  

