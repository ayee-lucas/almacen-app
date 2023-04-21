const mongoose = require('mongoose');


exports.dbConnection = async () => {
    try {
        const uriMongo = `${process.env.MONGODB_URI}`;
        mongoose.set('maxTimeMS', 2500);
        mongoose.set('strictQuery', false)
        await mongoose.connect(uriMongo);
        console.log('Connected to DB');
    } catch (err) {
        console.log(err)
    }
}
