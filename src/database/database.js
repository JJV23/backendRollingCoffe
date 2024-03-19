import 'dotenv/config';
import mongoose, { Mongoose } from 'mongoose';

const mongoURI = process.env.MONGODB_URI;
//console.log(mongoURI)

mongoose.connect(mongoURI);

const datosConexion = mongoose.connection;
datosConexion.once('open', ()=>{
    console.log('BD conectada')
})
