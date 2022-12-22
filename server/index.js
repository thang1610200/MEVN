import Express from 'express'
import Mongoose from 'mongoose'
import config from '@config'
import v1Router from '@routes'
import WebPackDevMiddleWare from 'webpack-dev-middleware'
import webpackConfig from '../webpack.config'
import WebPack from 'webpack'
import  path  from 'path'
const app = Express()

Mongoose.set('strictQuery', true)
Mongoose.connect(config.databaseUrl)

// Mongoose.connection.once("on",() => {
//     console.log("Connect Success");
// }).on(() => {
//     console.log("Fail");
// })

app.use(v1Router)

const complier = WebPack(webpackConfig);

app.use(WebPackDevMiddleWare(complier));

app.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname,'public/index.html'));
})

app.listen(3000, () => {
    console.log('Server is running')
})
