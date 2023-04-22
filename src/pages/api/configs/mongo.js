'use strict'
import mongoose from 'mongoose';

const { MONGODB_URI } = process.env;
export const connection = async()=> {
    try {
        await mongoose.connect(MONGODB_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        console.log('Conexión exitosa a la base de datos');
      } catch (err) {
        console.error('Error al conectar a la base de datos', err);
      };
}

export default connection;
