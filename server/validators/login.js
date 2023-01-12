import * as yup from 'yup'

const LoginSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).required()
})

export default (req,res,next) => {
    LoginSchema.validate()
                .then(() => next())
                .catch(err => {
                    res.status(422).json({
                        [err.path]: err.message
                    })
                })
}