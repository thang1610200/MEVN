import { Router } from 'express'
import authController from '../../controllers/v1/authcontroller.js'
import RegisterSchema from '../../validators/register.js'
import LoginSchema from '../../validators/login.js'

const authRouter = new Router()

authRouter.post('/login',LoginSchema, authController.login)

authRouter.post('/register',RegisterSchema,authController.register)

authRouter.post('/passwords/email',authController.forgotpassword)

export default authRouter
