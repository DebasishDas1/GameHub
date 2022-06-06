import mongoose from 'mongoose';
const { Schema, model } =  mongoose;
import uniqueValidator from'mongoose-unique-validator';

const userSchema = new Schema({
    game_name: { type: String, required: true },
    log: [{
      date: { type: String, required: true },
      score:  { type: Number, required: true },
    }]
});

userSchema.plugin(uniqueValidator);
export default model('Game', userSchema);
