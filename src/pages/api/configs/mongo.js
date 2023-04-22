import mongoose from "mongoose";


const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB;

// Connect to MongoDB Atlas
 export async function connect() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: dbName,
    });
    console.log('Connected to MongoDB Atlas');
  } catch (err) {
    console.error('Failed to connect to MongoDB Atlas', err);
  }
};



