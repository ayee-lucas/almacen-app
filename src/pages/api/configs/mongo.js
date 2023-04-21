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

const conn = {
    isConnected: false
}

exports.dbConnection = async ()=>{
    if(conn.isConnected) return;
    const db = await connect(process.env.MONGODB_URI);
    conn.isConnected = db.connection[0].readyState;
    console.log(db.connection.db.almacenadora5)
}

connection.on('connected',()=>{
    console.log('MongoDb is connected');
})