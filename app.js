const Koa = require('koa')
const router = require('./router')
const bodyParser = require('koa-bodyparser')
const views = require('koa-views')
const statics =  require('koa-static')
const path = require('path')
const cors = require("koa2-cors") //跨域

app.use(cors({ origin: "*" }))

const app = new Koa()
app.use(bodyParser({
  enableTypes: ['json', 'form', 'text']
}))

const staticPath = './static'
app.use(statics(
  path.join(__dirname, staticPath)
))

// 加载模板引擎
app.use(views(path.join(__dirname, './views'), {
  extension: 'ejs'
}))

app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(3000)