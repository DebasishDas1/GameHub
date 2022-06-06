import mongoose from 'mongoose';
const { Schema, model } =  mongoose;
import uniqueValidator from'mongoose-unique-validator';

const userSchema = new Schema({
    first_name: { type: String, required: true },
    middle_name: { type: String },
    last_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: Number, required: true, unique: true },
    pasword: { type: String, required: true, minlength: 6 },
    tags:  { type: String },
    game: [{
      game_name: String,
      game_score: Number,
    }]
});

userSchema.plugin(uniqueValidator);
export default model('User', userSchema);
