import mongoose from "mongoose";
import Randomstring from "randomstring";
import bcrypt from 'bcryptjs'

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    createdAt: Date,
    updatedAt: Date,
    password: String,
    emailConfirmedAt: Date,
    emailConfirmCode: String
})

UserSchema.pre('save',function() {
    this.password = bcrypt.hashSync(this.password);
    this.emailConfirmCode = Randomstring.generate(50);
    this.createdAt = new Date();
})


export default mongoose.model('User',UserSchema);