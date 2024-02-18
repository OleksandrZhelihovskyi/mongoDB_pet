const router = require('@koa/router')()
const {CreatePlanet, CreateSize, GetPlanet, DeletePlanet,UpdatePlanet} = require('../api/controller')
router.use(async (ctx,next)=>{
    try{
        await next()
    }
    catch(err){
        console.log(err)
    }
})
router.post('/planet', async (ctx)=>{
    ctx.body = await CreatePlanet(ctx)
})

router.post('/size', async (ctx)=>{
    ctx.body = await CreateSize(ctx)
})

router.get('/planet/:id', async (ctx)=>{
    ctx.body = await GetPlanet(ctx.params.id)
})

router.del('/planet/:id', async (ctx)=>{
    await DeletePlanet(ctx.params.id)
})

router.post('/planet/:id', async (ctx)=>{
    ctx.body = await UpdatePlanet(ctx)
})

module.exports = router