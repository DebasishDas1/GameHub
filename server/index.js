import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose'
import cors from 'cors';

import userRoute from './routes/userRoute.js'

const app = express();
const PORT = process.env.PORT || 5000 ;
const dataBase_URL = 'mongodb+srv://deba:1234@cluster0.okdgv.mongodb.net/?retryWrites=true&w=majority';

app.use( bodyParser.json( {limit:"30mb", extended: true} ) );
app.use( cors() );
app.use( '/user', userRoute );
// app.use( (req, res) => { res.header("Access-Control-Allow-Origin", "*"); })

app.get('/', (req, res, next) => {
    res.send('this projext is made to study mongoDB');
})

app.listen( PORT, async () => {
    console.log(`We are using port : ${PORT}`);
    try {
        await mongoose.connect( dataBase_URL );
        console.log('Cunnected with the Dstabase');
    } catch (error) {
        console.log(error.message)
    }
})

