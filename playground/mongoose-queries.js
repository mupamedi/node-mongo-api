const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5b98e7378e2640454ece1f7e';

// if(!ObjectID.isValid(id)) {
//     console.log('Id not valid');
// };

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo By Id', todo);
// }).catch((e) => {
//     console.log(e);
// });

var id = '5b98c827b3a6833503afe65b';

User.findById(id).then((user) => {
    if(!user) {
        return console.log('User not found');
    }
    console.log('User by Id', user);
}).catch((e) => {
    console.log(e);
    
});


