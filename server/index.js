import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose'
import cors from 'cors';

import userRoute from './routes/user_route.js';
import gameRouter from './routes/game_route.js';

const app = express();
const PORT = process.env.PORT || 5000 ;
const dataBase_URL = 'mongodb+srv://deba:1234@cluster0.okdgv.mongodb.net/De203basish?retryWrites=true&w=majority';

app.use( bodyParser.json( {limit:"30mb", extended: true} ) );
app.use( cors() );
app.use( '/user', userRoute );
app.use( '/game', gameRouter );
// app.use( (req, res) => { res.header("Access-Control-Allow-Origin", "*"); })

app.get('/', (req, res, next) => {
    res.send('this projext is made to study mongoDB');
})

app.listen( PORT, async () => {
    console.log(`We are using port : ${PORT}`);
    try {
        await mongoose.connect( 
            dataBase_URL,   
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        );
        console.log('Cunnected with the Dstabase');
    } catch (error) {
        console.log(error.message)
    }
})

