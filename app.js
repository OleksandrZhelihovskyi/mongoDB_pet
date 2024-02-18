const Koa = require('koa')
const { koaBody } = require('koa-body')
const router = require('./router/router')
const app = new Koa()

app.use(
    koaBody({
        parsedMethods: ['POST', 'PUT', 'PATCH', 'DELETE'],
    })
)
app.use(router.routes())
app.use(router.allowedMethods())
const server = app.listen(process.env.PORT, () => {
    console.log(`http://localhost:${process.env.PORT}`)
})

module.exports = server