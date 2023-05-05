import { connect, connection } from "mongoose";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB;

// Connect to MongoDB Atlas
export async function connectdb() {
  try {
    //Prevent from connecting if already connected
    if (connection.readyState === 1) {
      return;
    }

    const db = await connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: dbName,
    });

    console.log(db.connection.db.databaseName);

    console.log("Connected to MongoDB Atlas");
  } catch (err) {
    console.error("Failed to connect to MongoDB Atlas", err);
  }
}
