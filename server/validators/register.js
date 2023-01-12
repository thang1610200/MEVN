import * as yup from 'yup'
import User from '../models/Users.js'

const RegisterSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(6).required()
})

export default async (req,res,next) => {
    const {name, email, password} = req.body;

    try{
        await RegisterSchema.validate({name, email, password});

        const existingEmail = await User.findOne({email: email});

        if(existingEmail){
            throw new yup.ValidationError(
                'This email already exist',
                req.body,
                'email'
            )
        }
        return next();
    }
    catch(error){
        return res.status(422).json({
            [error.path]: error.message
        })
    }
}