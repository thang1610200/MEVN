import mongoose from "mongoose";
import Randomstring from "randomstring";
import bcrypt from 'bcryptjs'
import mail from '@fullstackjs/mail';
import config from "../config/default.js"
import jwt from "jsonwebtoken"
import PasswordReset from '../models/PasswordReset.js'

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


UserSchema.post('save', async function() {
    await new mail('confirm-account')
    .to(this.email,this.name)
    .subject('Please confirm your account')
    .data({
        name: this.name,
        url: `${config.url}/auth/emails/confirm/${this.emailConfirmCode}`
    })
    .send()
})

UserSchema.methods.generateToken = function() {
    return jwt.sign({id: this._id},config.jwt_secret);
}

UserSchema.methods.comparePass = function(plaintext){
    return bcrypt.compareSync(plaintext,this.password);
}

UserSchema.methods.forgotPass = async function(){
    const token = Randomstring.generate(50);

    await PasswordReset.create({
        token,
        email: this.email,
        createdAt: new Date()
    })

    await new mail('forgot-password')
        .to(this.email,this.name)
        .subject('Password Reset')
        .data({
            url: `${config.url}/auth/passwords/reset/${token}`,
            name: this.name
        })
        .send()
}

export default mongoose.model('User',UserSchema);