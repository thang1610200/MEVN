import dotenv from 'dotenv'

dotenv.config()

export default {
    databaseUrl: process.env.DATABASE_URL,
    url: process.env.APP_URL || 'http://localhost:3000',
    jwt_secret: process.env.JWT_SECRET || '1234'
}
