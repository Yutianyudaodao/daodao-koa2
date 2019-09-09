const Router = require('koa-router')
const router = new Router()
const {login,profile} = require('./controller/user')

router.prefix('/users')

router.post('/user/login', login)
router.get('/user/profile', profile)

module.exports = router