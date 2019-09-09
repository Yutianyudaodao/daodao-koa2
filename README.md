.封装node http server、创建Koa类构造函数
.构造request、response、context对象 ctx上下文
.中间件机制和剥洋葱模型的实现
.错误捕获和错误处理

支持async await

const Koa = require('koa')
const app = new Koa()
const router = require('./router')
const bodyParser = require('koa-bodyparser')

app.use(bodyParser())

app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(3000)

设置路有前缀


app.use(index.routes(), index.allowedMethods())
const router = require('koa-router')
let router = new Router({   
  prefix: './users'
})  
router.get('/list',async (ctx,next)=>{

})



一些中间件
app.context :是从其创建 ctx 的原型,可以通过编辑 app.context 为 ctx 添加其他属性。
koa-static:处理静态文件 