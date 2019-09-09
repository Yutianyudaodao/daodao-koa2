const router = require('koa-router')()

const login = async (ctx, next) => {
  ctx.body = 'this is a users response!'
}

const profile = async (ctx, next) => {
  ctx.body = 'this is a users response!'
}

module.exports = {
  login,
  profile
}