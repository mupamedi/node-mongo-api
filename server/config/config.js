var env = process.env.NODE_ENV || 'development';


if(env === 'development') {
    process.env.PORT = 3000;
    process.env.MONGODB_URI = 'mongodb://localhost:27017/TodosApp';
} else if (env === 'test') {
    process.env.PORT = 3000;
    process.env.MONGODB_URI = 'mongodb://localhost:27017/TodosAppTest';
}else if(env === 'production') {
    process.env.MONGODB_URI = 'mongodb://kweoizvbkawg:hzDMVWXXzwf4p7dZMXf4TMiZzkwkdHmsfzefnRCJvrWGVefVtAMqp9y6fvWroQNU@ds155352.mlab.com:55352/node-api-test'
}